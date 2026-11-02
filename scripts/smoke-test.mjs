import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'game-art-director-test-'));
try{
 const target=path.join(temp,'game','game-art');
 const gdd=path.join(temp,'game','GDD.md');
 fs.mkdirSync(path.dirname(gdd),{recursive:true});
 fs.writeFileSync(gdd,'# Sample Game\n\n2D platformer GDD.\n');
 const result=spawnSync(process.execPath,[path.join(root,'.agents/skills/game-art-director/scripts/init-workspace.mjs'),'--target',target,'--gdd',gdd],{encoding:'utf8'});
 assert.equal(result.status,0,result.stderr);
 assert.match(fs.readFileSync(path.join(target,'docs','GDD.md'),'utf8'),/Sample Game/);
 assert.ok(fs.existsSync(path.join(target,'workspace.json')));
 const sentinel=path.join(target,'docs','GDD.md');
 fs.writeFileSync(sentinel,'# User approved GDD');
 const rerun=spawnSync(process.execPath,[path.join(root,'.agents/skills/game-art-director/scripts/init-workspace.mjs'),'--target',target,'--gdd',gdd],{encoding:'utf8'});
 assert.equal(rerun.status,0,rerun.stderr);
 assert.equal(fs.readFileSync(sentinel,'utf8'),'# User approved GDD');
 console.log('Smoke tests passed: workspace, GDD import, non-overwrite.');
}finally{fs.rmSync(temp,{recursive:true,force:true})}
