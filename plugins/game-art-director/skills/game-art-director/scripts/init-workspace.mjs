#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const args = process.argv.slice(2);
function arg(key){const i=args.indexOf(key);return i>=0?args[i+1]:null}
const here=path.dirname(fileURLToPath(import.meta.url));
const template=path.resolve(here,'../template');
const target=path.resolve(arg('--target')||path.join(process.cwd(),'game-art'));
const gdd=arg('--gdd');
if(!fs.existsSync(template))throw new Error('Workspace template missing: '+template);
if(fs.existsSync(target)&&!fs.statSync(target).isDirectory())throw new Error('Target is not a directory');
function copy(src,dest){
 const stat=fs.statSync(src);
 if(stat.isDirectory()){
   fs.mkdirSync(dest,{recursive:true});
   for(const name of fs.readdirSync(src))copy(path.join(src,name),path.join(dest,name));
 }else if(!fs.existsSync(dest)){
   fs.mkdirSync(path.dirname(dest),{recursive:true});
   fs.copyFileSync(src,dest);
 }
}
copy(template,target);
if(gdd){
 const source=path.resolve(gdd);
 if(!fs.existsSync(source))throw new Error('GDD not found: '+source);
 const dest=path.join(target,'docs','GDD.md');
 if(['.md','.txt'].includes(path.extname(source).toLowerCase())){
  const current=fs.existsSync(dest)?fs.readFileSync(dest,'utf8'):'';
  if(!current||current.includes('待用户填入')||current.includes('待补充'))fs.copyFileSync(source,dest);
 }else{
  const dir=path.join(target,'docs','source');fs.mkdirSync(dir,{recursive:true});
  const dst=path.join(dir,path.basename(source));if(!fs.existsSync(dst))fs.copyFileSync(source,dst);
 }
}
console.log('Workspace ready:',target);
