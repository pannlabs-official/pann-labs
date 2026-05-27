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
  if (filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Cyan to Mint
    content = content.replace(/rgba\(0,\s*240,\s*255/g, 'rgba(130, 232, 209');
    
    // Gold to Champagne Gold
    content = content.replace(/rgba\(255,\s*215,\s*0/g, 'rgba(230, 200, 117');

    // Hardcoded Hexes in CSS
    // Cyan Hex
    content = content.replace(/#00F0FF/gi, '#82E8D1');
    content = content.replace(/#0088FF/gi, '#0C5C46');
    
    // Gold Hex
    content = content.replace(/#FFD700/gi, '#E6C875');
    content = content.replace(/#FFA500/gi, '#CFA54D');

    // Midnight dark backgrounds
    content = content.replace(/#0A0E17/gi, '#021B14');
    content = content.replace(/rgba\(10,\s*14,\s*23/g, 'rgba(2, 27, 20');
    content = content.replace(/#111827/gi, '#042C21');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
