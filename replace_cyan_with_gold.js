const fs = require('fs');
const path = require('path');

const directory = './src';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(directory, function(filePath) {
  if (filePath.endsWith('.css') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace cyan with gold
    content = content.replace(/cyan-accent/g, 'gold-accent');
    content = content.replace(/--color-accent-cyan/g, '--color-accent-gold');
    content = content.replace(/--shadow-cyan-glow/g, '--shadow-gold-glow');
    content = content.replace(/--gradient-cyan/g, '--gradient-gold');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
