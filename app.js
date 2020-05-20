const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs'); //file system

let pathObj = path.parse(__filename);

//console.log(pathObj);

logger.log('path: ', pathObj);

//memori libre
let freeMem = os.freemem();
let totalMem = os.totalmem();

logger.log('memoria libre: ', freeMem);
logger.log('memoria total:', totalMem);

//forma sincrona
let rootDir = fs.readdirSync('./');

console.log(rootDir);

//asincrona
fs.readdir('./', (err, files) => {
  err ? console.log(err) : console.log(files);
});

logger.getAllFilesOfPath('./');
logger.getAllFilesOfPathSort('./');
logger.getAllFilesOfPathSortReverse('./');

logger.getAllFilesOfPathBeginWithALetter('./');

var arr = ['a', 'b', 'Z', 'Aa', 'AA'];
console.log(arr.sort());
//[ 'AA', 'Aa', 'Z', 'a', 'b' ]
