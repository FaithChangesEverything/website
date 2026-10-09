import {createHash} from 'node:crypto';
import {inflateRawSync} from 'node:zlib';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';

const SOURCE_URL='https://ebible.org/Scriptures/eng-kjv2006_usfm.zip';
const SOURCE_SHA='5789dcd000d60a554abb4cf9b37ce10a53628bfc686e11ada2d6c981455239c1';
const BOOK_NAMES='Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1 Samuel|2 Samuel|1 Kings|2 Kings|1 Chronicles|2 Chronicles|Ezra|Nehemiah|Esther|Job|Psalms|Proverbs|Ecclesiastes|Song of Solomon|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|1 John|2 John|3 John|Jude|Revelation'.split('|');
const CHAPTER_COUNTS=[50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];

function unzipEntries(buffer){
  let eocd=-1;
  for(let pos=buffer.length-22;pos>=Math.max(0,buffer.length-65557);pos--){
    if(buffer.readUInt32LE(pos)===0x06054b50){eocd=pos;break;}
  }
  if(eocd<0) throw Error('Missing ZIP directory');
  const count=buffer.readUInt16LE(eocd+10);
  let cursor=buffer.readUInt32LE(eocd+16);
  const result=new Map();
  for(let i=0;i<count;i++){
    if(buffer.readUInt32LE(cursor)!==0x02014b50)throw Error('Invalid ZIP central directory');
    const method=buffer.readUInt16LE(cursor+10);
    const compressedSize=buffer.readUInt32LE(cursor+20);
    const filenameSize=buffer.readUInt16LE(cursor+28);
    const extraSize=buffer.readUInt16LE(cursor+30);
    const commentSize=buffer.readUInt16LE(cursor+32);
    const localOffset=buffer.readUInt32LE(cursor+42);
    const filename=buffer.subarray(cursor+46,cursor+46+filenameSize).toString('utf8');
    const start=localOffset+30+buffer.readUInt16LE(localOffset+26)+buffer.readUInt16LE(localOffset+28);
    const compressed=buffer.subarray(start,start+compressedSize);
    if(filename.endsWith('.usfm')){
      if(method!==8&&method!==0)throw Error('Unsupported ZIP method '+method);
      result.set(filename,method===8?inflateRawSync(compressed).toString('utf8'):compressed.toString('utf8'));
    }
    cursor+=46+filenameSize+extraSize+commentSize;
  }
  return result;
}
function clean(raw){
  raw=raw.replace(/\\f\s[\s\S]*?\\f\*/g,'').replace(/\\\+?w\s+([^|]*?)\|[^\\]*?\\\+?w\*/g,'$1');
  const format=/\\(\+?add|\+?nd|wj|tl)(\*)?/g;
  let match,pos=0;
  const active={italic:false,divineName:false,jesusWords:false};
  const runs=[];
  function append(text){
    text=text.replace(/\\(?:[a-z][a-z0-9]*\*?|\+[a-z][a-z0-9]*\*?)\s*/gi,'').replace(/[ \t]+/g,' ');
    if(!text)return;
    const flags=Object.fromEntries(Object.entries(active).filter(([,v])=>v));
    const last=runs.at(-1);
    if(last&&Object.keys(flags).every(k=>last[k]===flags[k])&&Object.keys(last).filter(k=>k!=='text').length===Object.keys(flags).length)last.text+=text;
    else runs.push({text,...flags});
  }
  while((match=format.exec(raw))){
    append(raw.slice(pos,match.index));
    const k=match[1].replace(/^\+/,'');
    const mapped={add:'italic',tl:'italic',nd:'divineName',wj:'jesusWords'}[k];
    active[mapped]=!match[2];
    pos=format.lastIndex;
  }
  append(raw.slice(pos));
  for(let i=1;i<runs.length;i++)if(runs[i-1].text.endsWith(' ')&&runs[i].text.startsWith(' '))runs[i].text=runs[i].text.replace(/^ +/,'');
  if(runs.length){runs[0].text=runs[0].text.trimStart();runs.at(-1).text=runs.at(-1).text.trimEnd();}
  return runs.filter(r=>r.text.length);
}
function parseBook(source,name,idx){
  const slug=name.toLowerCase().replace(/\s+/g,'-');
  const book={book:name,slug,order:idx+1,testament:idx<39?'old':'new',chapters:[]};
  let chapter=null,paragraph=null,current=null;
  function flush(){if(current){current.runs=clean(current._raw);current.text=current.runs.map(r=>r.text).join('');delete current._raw;current=null;}}
  for(let line of source.split(/\r?\n/)){
    line=line.trimEnd();if(!line)continue;
    const ch=line.match(/^\\c\s+(\d+)/);
    if(ch){flush();chapter={number:Number(ch[1]),paragraphs:[]};book.chapters.push(chapter);paragraph=null;continue;}
    if(!chapter)continue;
    const p=line.match(/^\\(p|q[1-4]|b|d)\b\s*(.*)/);
    if(p){const k=p[1];paragraph={kind:k.startsWith('q')?'poetry':k==='b'?'blank':'paragraph',indent:k.startsWith('q')?Number(k[1]):0,verses:[]};chapter.paragraphs.push(paragraph);line=p[2];if(!line)continue;}
    const v=line.match(/^\\v\s+(\d+)\s+(.*)/);
    if(v){flush();if(!paragraph){paragraph={kind:'paragraph',indent:0,verses:[]};chapter.paragraphs.push(paragraph);}current={verse:Number(v[1]),_raw:v[2]};paragraph.verses.push(current);}
    else if(current&&!line.startsWith('\\s1 ')&&!line.startsWith('\\mt')&&!line.startsWith('\\id ')&&!line.startsWith('\\h ')&&!line.startsWith('\\toc'))current._raw+=' '+line;
  }
  flush();return book;
}
async function importBible(sourcePath=process.env.FCE_KJV_SOURCE_ZIP){
  const destination=path.join(process.cwd(),'data','bible','kjv');
  const mark=path.join(destination,'source.json');
  if(existsSync(mark)){
    const info=JSON.parse(await readFile(mark,'utf8'));
    if(info.source_sha256===SOURCE_SHA&&info.books===66&&info.chapters===1189&&info.verses===31102){
      console.log('Verified FCE KJV dataset already present; no download needed');return;
    }
  }
  const source=sourcePath?await readFile(sourcePath):Buffer.from(await (async()=>{
    const response=await fetch(SOURCE_URL);
    if(!response.ok)throw Error('KJV download failed: '+response.status);
    return response.arrayBuffer();
  })());
  const sha=createHash('sha256').update(source).digest('hex');
  if(sha!==SOURCE_SHA)throw Error('Bible source SHA-256 mismatch: '+sha);
  const entries=unzipEntries(source);
  const files=[...entries.keys()].sort();
  if(files.length!==66)throw Error('Expected 66 books, found '+files.length);
  await mkdir(destination,{recursive:true});
  let allChapters=0,allVerses=0;
  for(let i=0;i<files.length;i++){
    const book=parseBook(entries.get(files[i]).replace(/^\uFEFF/,''),BOOK_NAMES[i],i);
    if(book.chapters.length!==CHAPTER_COUNTS[i])throw Error(BOOK_NAMES[i]+' unexpected chapter count');
    for(const chapter of book.chapters){
      const numbers=chapter.paragraphs.flatMap(p=>p.verses).map(v=>v.verse);
      if(numbers.some((n,j)=>n!==j+1))throw Error(BOOK_NAMES[i]+' '+chapter.number+' invalid verse sequence');
      allVerses+=numbers.length;
    }
    allChapters+=book.chapters.length;
    await writeFile(path.join(destination,book.slug+'.json'),JSON.stringify(book),'utf8');
  }
  if(allChapters!==1189||allVerses!==31102)throw Error('KJV totals mismatch: '+allChapters+', '+allVerses);
  await writeFile(mark,JSON.stringify({source:'eBible eng-kjv2006 USFM',source_sha256:SOURCE_SHA,books:66,chapters:allChapters,verses:allVerses},null,2));
  console.log('Validated FCE KJV: 66 books, '+allChapters+' chapters, '+allVerses+' verses');
}
await importBible();
