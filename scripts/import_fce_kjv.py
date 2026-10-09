#!/usr/bin/env python3
"""Reproducible FCE KJV importer. Source archive must match the pinned SHA-256."""
import collections
import hashlib
import json
import pathlib
import re
import sys
import zipfile

EXPECTED="5789dcd000d60a554abb4cf9b37ce10a53628bfc686e11ada2d6c981455239c1"
NAMES="Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1 Samuel|2 Samuel|1 Kings|2 Kings|1 Chronicles|2 Chronicles|Ezra|Nehemiah|Esther|Job|Psalms|Proverbs|Ecclesiastes|Song of Solomon|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1 Corinthians|2 Corinthians|Galatians|Ephesians|Philippians|Colossians|1 Thessalonians|2 Thessalonians|1 Timothy|2 Timothy|Titus|Philemon|Hebrews|James|1 Peter|2 Peter|1 John|2 John|3 John|Jude|Revelation".split("|")
CHAPTERS=[50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22]
word_re=re.compile(r'\\\+?w\s+([^|]*?)\|[^\\]*?\\\+?w\*')
foot_re=re.compile(r'\\f\s.*?\\f\*',re.S)
fmt_re=re.compile(r'\\(\+?add|\+?nd|wj|tl)(\*)?')
other_re=re.compile(r'\\(?:[A-Za-z][A-Za-z0-9]*\*?|\+[A-Za-z][A-Za-z0-9]*\*?)\s*')
def clean(raw):
    raw=word_re.sub(lambda m:m.group(1),foot_re.sub("",raw))
    active={'italic':False,'divineName':False,'jesusWords':False}
    runs=[];pos=0
    def append(txt):
        txt=re.sub(r'[ \t]+',' ',other_re.sub('',txt))
        if txt:
            flags={k:v for k,v in active.items() if v}
            if runs and {k:v for k,v in runs[-1].items() if k!='text'}==flags:
                runs[-1]['text']+=txt
            else:runs.append({'text':txt,**flags})
    for m in fmt_re.finditer(raw):
        append(raw[pos:m.start()])
        key=m.group(1).lstrip('+')
        active[{'add':'italic','tl':'italic','nd':'divineName','wj':'jesusWords'}[key]]=not bool(m.group(2))
        pos=m.end()
    append(raw[pos:])
    for i in range(1,len(runs)):
        if runs[i-1]['text'].endswith(' ') and runs[i]['text'].startswith(' '):
            runs[i]['text']=runs[i]['text'].lstrip()
    if runs:
        runs[0]['text']=runs[0]['text'].lstrip()
        runs[-1]['text']=runs[-1]['text'].rstrip()
    return [r for r in runs if r['text']]

def main(src,out):
    source=pathlib.Path(src)
    if hashlib.sha256(source.read_bytes()).hexdigest()!=EXPECTED:
        raise RuntimeError("Bible source SHA-256 mismatch; refusing to import")
    z=zipfile.ZipFile(source)
    usfm=sorted(n for n in z.namelist() if n.endswith('.usfm'))
    if len(usfm)!=66: raise RuntimeError(f"Expected 66 USFM files, found {len(usfm)}")
    out=pathlib.Path(out);out.mkdir(parents=True,exist_ok=True)
    total_ch=total_v=0
    for idx,(name,expected) in enumerate(zip(NAMES,CHAPTERS)):
        source_text=z.read(usfm[idx]).decode('utf-8-sig')
        slug=re.sub(r'\s+','-',name.lower())
        book={'book':name,'slug':slug,'order':idx+1,'testament':'old' if idx<39 else 'new','chapters':[]}
        chapter=para=current=None
        def flush():
            nonlocal current
            if current is not None:
                current['runs']=clean(current.pop('_raw'))
                current['text']=''.join(r['text'] for r in current['runs'])
                current=None
        for line in source_text.splitlines():
            line=line.rstrip()
            if not line:continue
            ch=re.match(r'^\\c\s+(\d+)',line)
            if ch:
                flush()
                chapter={'number':int(ch.group(1)),'paragraphs':[]};book['chapters'].append(chapter);para=None;continue
            if chapter is None:continue
            p=re.match(r'^\\(p|q[1-4]|b|d)\b\s*(.*)',line)
            if p:
                k=p.group(1)
                para={'kind':'poetry' if k.startswith('q') else ('blank' if k=='b' else 'paragraph'), 'indent':int(k[1]) if k.startswith('q') else 0, 'verses':[]}
                chapter['paragraphs'].append(para)
                line=p.group(2)
                if not line:continue
            v=re.match(r'^\\v\s+(\d+)\s+(.*)',line)
            if v:
                flush()
                if para is None:
                    para={'kind':'paragraph','indent':0,'verses':[]}
                    chapter['paragraphs'].append(para)
                current={'verse':int(v.group(1)),'_raw':v.group(2)}
                para['verses'].append(current)
            elif current is not None and not line.startswith(('\\s1 ','\\mt','\\id ','\\h ','\\toc')):
                current['_raw']+=' '+line
        flush()
        if len(book['chapters'])!=expected:raise RuntimeError(f"{name}: chapter count mismatch")
        verses=0
        for chapter in book['chapters']:
            nums=[v['verse'] for p in chapter['paragraphs'] for v in p['verses']]
            if nums!=list(range(1,len(nums)+1)):
                raise RuntimeError(f"{name} {chapter['number']}: verse numbering mismatch")
            verses+=len(nums)
        total_ch+=len(book['chapters']);total_v+=verses
        (out/(slug+'.json')).write_text(json.dumps(book,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
    if (total_ch,total_v)!=(1189,31102):
        raise RuntimeError(f"Unexpected totals: {total_ch} chapters, {total_v} verses")
    (out/'source.json').write_text(json.dumps({'source':'eBible eng-kjv2006 USFM','source_sha256':EXPECTED,'books':66,'chapters':total_ch,'verses':total_v},indent=2))
    print(f"Validated {len(NAMES)} books, {total_ch} chapters, {total_v} verses")
if __name__=='__main__':
    main(sys.argv[1],sys.argv[2])
