const fs = require('fs'); //file system

log = (titulo, message) => {
  console.log(titulo + ' :' + message);
};

getAllFilesOfPath = (path) => {
  //async

  fs.readdir(path, (err, files) => {
    err ? console.log(err) : console.log(files);
  });
};

getAllFilesOfPathSort = (path) => {
  //async

  fs.readdir(path, (err, files) => {
    err ? console.log(err) : console.log(files.sort());
  });
};

getAllFilesOfPathSortReverse = (path) => {
  //async

  fs.readdir(path, (err, files) => {
    err ? console.log(err) : console.log(files.reverse());
  });
};

getAllFilesOfPathBeginWithALetter = (path) => {
  var regex = new RegExp('[a-z]+');
  //alert('abc433qwe234'.match(regex));
  let contador = 0;

  fs.readdir(path, (err, files) => {
    err
      ? console.log(err)
      : files.map((file) => {
          file[0].match(regex) ? contador++ : null;
        });

    console.log('cantidad: ' + contador.toString());
  });
};

module.exports.log = log;
module.exports.getAllFilesOfPath = getAllFilesOfPath;
module.exports.getAllFilesOfPathSort = getAllFilesOfPathSort;
module.exports.getAllFilesOfPathSortReverse = getAllFilesOfPathSortReverse;
module.exports.getAllFilesOfPathBeginWithALetter = getAllFilesOfPathBeginWithALetter;
