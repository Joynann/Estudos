const path = require('path');
const fs = require('fs').promises;

async function readdir(rootDir, regexp = /\./)
{
    rootDir = rootDir || path.resolve(__dirname, '..', '..', '..');
    const files = await fs.readdir(rootDir);
    walk(files, rootDir, regexp);
}

async function walk(files, rootDir, regexp)
{
    for(const file of files)
    {
        const fileFullPath = path.resolve(rootDir, file);
        const stat = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_module/g.test(fileFullPath)) continue;
        if(/\.json/g.test(fileFullPath)) continue;
        
        if(stat.isDirectory())
        {
            readdir(fileFullPath, regexp);
            continue;
        }
        if(RegExp(regexp).test(file)) console.log(file);
    }
}

exports.readdir = readdir;