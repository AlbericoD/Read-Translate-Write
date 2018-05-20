const letterCount = require('letter-count');
const fs = require('fs');
const dir = require('node-dir');

module.exports.hello = (done) => {
  return done(null, 'It works!');
};
module.exports.readAndCount = (done) => {
  return done(null, 'Ok');
};

module.exports.leArquivos = (dirname, onFileContent, onError) => {
  fs.readdir(dirname, (err, filenames) => {
    if (err) return onError(err);
    filenames.forEach((filename) => {
      fs.readFile(dirname + filename, 'utf-8', (err, content) => {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
};

module.exports.count = (content) => {
  let result = {};
  result = letterCount.count(content);
  return result;
};

module.exports.leDiretorios = (ref) => {
  let allWords = 0;
  dir.readFiles(
    ref,
    {
      match: /.txt$/,
      exclude: /^\./
    },
    function(err, content, next) {
      if (err) throw err;
      // console.log('content:', content);
      let contt = letterCount.count(content, '--words');
      console.log(contt.words);
      allWords += contt.words;
      next();
    },
    function(err, files) {
      if (err) throw err;
      console.log('Arquivos lidos: ', files);
      console.log('Total Palavras: ', allWords);
    }
  );
};
