"use client";

import { useState } from "react";

const videoUrl = "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/bf75d443f196d77274dcca4beb969248/iframe";

export function PrayerOfSalvationVideo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}
        style={{display:"inline-block",marginTop:"1rem",padding:"0.8rem 1.2rem",borderRadius:"0.5rem",background:"#243b55",color:"#fff",fontWeight:700,cursor:"pointer",border:0}}>
        ▶ Prayer of Salvation
      </button>
      {open && (
        <div role="presentation" onClick={() => setOpen(false)}
          style={{position:"fixed",inset:0,zIndex:1000,background:"rgba(0,0,0,.85)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem"}}>
          <div role="dialog" aria-modal="true" aria-label="Prayer of Salvation video"
            onClick={(event) => event.stopPropagation()}
            style={{width:"100%",maxWidth:960,background:"#151515",padding:"1rem",borderRadius:"0.75rem"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",marginBottom:"0.75rem",color:"white"}}>
              <strong>Prayer of Salvation</strong>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close Prayer of Salvation video"
                style={{padding:"0.5rem 0.9rem",border:"1px solid #aaa",background:"transparent",color:"white",borderRadius:"0.4rem",cursor:"pointer"}}>
                Close ×
              </button>
            </div>
            <div style={{position:"relative",width:"100%",aspectRatio:"16 / 9"}}>
              <iframe src={videoUrl} title="Prayer of Salvation — Pastor Richard"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen loading="lazy"
                style={{position:"absolute",inset:0,width:"100%",height:"100%",border:0}}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
