"use client";
import { useCallback, useMemo, useSyncExternalStore } from "react";
import styles from "@/app/reading-plans/reading-plans.module.css";

const prefix = "fce-reading-plan-progress-v1:";
const changedEvent = "fce-reading-plan-progress-change";
function parseDays(serialized:string,total:number):number[] {
  try {
    const values:unknown=JSON.parse(serialized);
    if(!Array.isArray(values))return [];
    return Array.from(new Set(values.filter((n):n is number=>Number.isSafeInteger(n)&&n>=1&&n<=total))).sort((a,b)=>a-b);
  } catch {return [];}
}
function readString(key:string):string {
  try {return window.localStorage.getItem(key)??"[]";} catch {return "[]";}
}
/** Browser-only completion state. useSyncExternalStore avoids effect state updates and hydration mismatches. */
export function useReadingProgress(slug:string,total:number){
  const key=prefix+slug;
  const subscribe=useCallback((notify:()=>void)=>{
    const onStorage=(event:StorageEvent)=>{if(event.key===key||event.key===null)notify();};
    const onLocal=(event:Event)=>{if((event as CustomEvent<string>).detail===key)notify();};
    window.addEventListener("storage",onStorage);
    window.addEventListener(changedEvent,onLocal);
    return ()=>{window.removeEventListener("storage",onStorage);window.removeEventListener(changedEvent,onLocal);};
  },[key]);
  const getSnapshot=useCallback(()=>readString(key),[key]);
  const getServerSnapshot=useCallback(()=>"[]",[]);
  const value=useSyncExternalStore(subscribe,getSnapshot,getServerSnapshot);
  const days=useMemo(()=>parseDays(value,total),[value,total]);
  const update=(next:number[])=>{
    try {window.localStorage.setItem(key,JSON.stringify(next));}catch{/* Storage can be disabled. */}
    window.dispatchEvent(new CustomEvent(changedEvent,{detail:key}));
  };
  const toggle=(day:number)=>{
    if(!Number.isSafeInteger(day)||day<1||day>total)return;
    const current=parseDays(readString(key),total);
    update(current.includes(day)?current.filter(n=>n!==day):[...current,day].sort((a,b)=>a-b));
  };
  const reset=()=>{
    try {window.localStorage.removeItem(key);}catch{}
    window.dispatchEvent(new CustomEvent(changedEvent,{detail:key}));
  };
  return {days,ready:true,toggle,reset,count:days.length,percent:Math.round(days.length/total*100)};
}
export function PrivacyNotice() {
  return <aside className={styles.privacy} aria-label="Your progress and privacy">
    <strong>🛡 Your Progress &amp; Your Privacy</strong>
    <p>Your completed readings are stored only in this browser on this device. No account is required, and FCE does not collect your reading-progress history on its servers.</p>
    <p>Refreshing or reopening the page will not erase saved progress. <strong>Clearing website data, using private browsing, or switching browsers or devices may cause progress to be lost.</strong></p>
    <p>We designed this approach to protect your privacy and minimize collection of personal information.</p>
  </aside>;
}
