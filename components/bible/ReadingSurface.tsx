"use client";
import {useState,type ReactNode} from "react";
import styles from "./ReadingSurface.module.css";

export default function ReadingSurface({children}:{children:ReactNode}){
 const [size,setSize]=useState(19);
 return <div style={{["--scripture-font-size" as string]:`${size}px`}}>
  <div className={styles.controls} aria-label="Bible text size">
   <span>Text size</span>
   <button type="button" disabled={size<=16} onClick={()=>setSize(v=>Math.max(16,v-2))} aria-label="Decrease Bible text size">A−</button>
   <button type="button" disabled={size>=28} onClick={()=>setSize(v=>Math.min(28,v+2))} aria-label="Increase Bible text size">A+</button>
  </div>
  {children}
 </div>;
}
