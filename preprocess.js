const
  _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),

  ext = '.tmpl',
  srcDir = './src';

function preprocessFile(p) {
  if(path.extname(p) == ext){
    console.log('preprocessing: ' + p);
    const template = fs.readFileSync(p, 'utf8')
    fs.writeFileSync(p.slice(0, - ext.length), _.template(template)(), 'utf8')
  }
}

function preprocessDir(p) {
  fs.readdir(p, (err, files) =>
     files.forEach(file => {
        var fullPath = path.join(p, file);
        if(fs.statSync(fullPath).isDirectory()) {
          preprocessDir(fullPath)
        } else {
          preprocessFile(fullPath);
        }
      }));
}

preprocessDir(srcDir);
