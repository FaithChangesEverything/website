import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { findBibleBook } from "./books";

export type VerseRun = {text:string;italic?:boolean;divineName?:boolean;jesusWords?:boolean};
export type BibleVerse = {verse:number;text:string;runs:VerseRun[]};
export type BibleParagraph = {kind:string;indent:number;verses:BibleVerse[]};
export type BibleChapter = {number:number;paragraphs:BibleParagraph[]};
export async function getBibleChapter(slug:string,chapter:number):Promise<BibleChapter|null>{
 const meta=findBibleBook(slug);
 if(!meta||!Number.isInteger(chapter)||chapter<1||chapter>meta.chapters)return null;
 try{
   const file=await readFile(path.join(process.cwd(),"data","bible","kjv",slug+".json"),"utf8");
   const book=JSON.parse(file) as {chapters:BibleChapter[]};
   return book.chapters[chapter-1]??null;
 }catch(err){
   if((err as NodeJS.ErrnoException).code==="ENOENT")return null;
   throw err;
 }
}
