import { spawnSync } from "node:child_process";
const isReadingPlansPilot =
  process.env.VERCEL_ENV === "preview" &&
  process.env.VERCEL_GIT_COMMIT_REF === "feature/fce-reading-plans-jesus-pilot";

function run(command,args){
  const result=spawnSync(command,args,{stdio:"inherit",env:process.env});
  if(result.error)throw result.error;
  if(result.status!==0)process.exit(result.status??1);
}
if(isReadingPlansPilot){
  // Pilot ONLY: do not import an unverified upstream archive or serve an alternate Bible.
  // Scripture links on this preview point to the already released FCE Bible Reader.
  console.log("FCE Reading Plans preview: using verified production Bible Reader links; source import intentionally omitted.");
  run("node",["scripts/validate-reading-plans.mjs"]);
}else{
  // Every production build retains its original pinned source SHA-256 verification.
  run("node",["scripts/import_fce_kjv.mjs"]);
}
run("node",["node_modules/next/dist/bin/next","build"]);
