import type { ReactNode } from "react";
type IconName="read"|"browse"|"guide"|"journal"|"study"|"old"|"new";
export default function BibleIcon({name,size=52}:{name:IconName;size?:number}){
const common={fill:"none",stroke:"currentColor",strokeWidth:1.65,strokeLinecap:"round" as const,strokeLinejoin:"round" as const};
let shape:ReactNode;
switch(name){
case "read": shape=<><path d="M24 41c-6-5-12-6-19-5V10c8-2 14 0 19 5 5-5 11-7 19-5v26c-7-1-13 0-19 5Z"/><path d="M24 15v26M9 15c5-.4 8 .5 11 3M28 18c3-2.5 7-3.4 11-3"/></>;break;
case "browse": shape=<><path d="M8 13 20 7l12 6-12 6-12-6Zm0 10 12-6 12 6-12 6-12-6Zm0 10 12-6 12 6-12 6-12-6Z" transform="translate(3 0)"/><path d="m35 15 6-3v23l-12 6-12-6" opacity=".65"/></>;break;
case "guide":shape=<><circle cx="24" cy="24" r="18"/><path d="m31 17-5 12-12 5 5-12 12-5Z"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/><path d="M24 3v5M24 40v5M3 24h5M40 24h5"/></>;break;
case "journal":shape=<><rect x="9" y="9" width="29" height="32" rx="3"/><path d="M16 9v32M21 17h11M21 23h8M21 29h5M33 34l8-8 3 3-8 8-5 2 2-5Z"/><path d="M13 5v7M22 5v7M31 5v7"/></>;break;
case "study":shape=<><path d="M24 42V24M24 32c-9 0-14-5-14-14 9 0 14 5 14 14Zm0-8c0-9 5-14 14-14 0 9-5 14-14 14ZM16 42h16"/><path d="M24 20c-5-2-8-6-8-13 6 1 9 5 8 13Z"/></>;break;
case "old": shape=<><path d="M24 41c-6-5-12-6-19-5V10c8-2 14 0 19 5 5-5 11-7 19-5v26c-7-1-13 0-19 5Z"/><path d="M24 15v26M8 39c6-1 11 0 16 4 5-4 10-5 16-4"/></>;break;
default:shape=<path d="M21 5h6v15h14v6H27v17h-6V26H7v-6h14z"/>;
}
return <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false" style={{color:name==="browse"||name==="guide"||name==="new"?"#183d67":"#b77e22"}} {...common}>{shape}</svg>;
}
