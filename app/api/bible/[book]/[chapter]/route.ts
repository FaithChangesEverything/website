import { NextResponse } from "next/server";
import { getBibleChapter } from "@/lib/bible/data";
export async function GET(_req:Request,{params}:{params:Promise<{book:string;chapter:string}>}){
 const {book,chapter}=await params;
 if(!/^[1-9]\d*$/.test(chapter))return NextResponse.json({error:"Invalid chapter"}, {status:400});
 const result=await getBibleChapter(book,Number(chapter));
 if(!result)return NextResponse.json({error:"Passage not found or KJV data not imported"}, {status:404});
 return NextResponse.json(result,{headers:{"Cache-Control":"public, max-age=3600"}});
}
