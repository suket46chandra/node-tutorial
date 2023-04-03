const fs= require('fs')
const path=require('path')
console.log('start')

//const filepath=path.join('/content','first.txt')
//console.log(path.sep);

//console.log(filepath);

const first=fs.readFileSync('./content/first.txt','utf8');
const second=fs.readFileSync('./content/second.txt','utf-8');
console.log(first)
console.log(second)

fs.writeFileSync('./content/result-sync.txt',`here is the result:${first},${second}`);

console.log('done with the task')


