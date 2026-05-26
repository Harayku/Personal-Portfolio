import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';

const replacements = [
  // Backgrounds
  { regex: /bg-slate-950(?!\/)/g, replacement: 'bg-white dark:bg-slate-950', hasGroup: false },
  { regex: /bg-slate-950\/(\d+)/g, replacement: 'bg-white/$1 dark:bg-slate-950/$1', hasGroup: true },
  { regex: /bg-slate-900(?!\/)/g, replacement: 'bg-slate-50 dark:bg-slate-900', hasGroup: false },
  { regex: /bg-slate-900\/(\d+)/g, replacement: 'bg-slate-50/$1 dark:bg-slate-900/$1', hasGroup: true },
  
  // Text colors
  { regex: /text-slate-400/g, replacement: 'text-slate-600 dark:text-slate-400', hasGroup: false },
  { regex: /text-slate-300/g, replacement: 'text-slate-700 dark:text-slate-300', hasGroup: false },
  { regex: /text-slate-200/g, replacement: 'text-slate-800 dark:text-slate-200', hasGroup: false },
  { regex: /text-white/g, replacement: 'text-slate-900 dark:text-white', hasGroup: false },
  
  // Borders
  { regex: /border-white\/5/g, replacement: 'border-slate-200 dark:border-white/5', hasGroup: false },
  { regex: /border-white\/10/g, replacement: 'border-slate-300 dark:border-white/10', hasGroup: false },
  { regex: /border-white\/20/g, replacement: 'border-slate-300 dark:border-white/20', hasGroup: false },
  
  // Hover Backgrounds
  { regex: /hover:bg-white\/5/g, replacement: 'hover:bg-slate-100 dark:hover:bg-white/5', hasGroup: false },
  { regex: /hover:bg-white\/10/g, replacement: 'hover:bg-slate-200 dark:hover:bg-white/10', hasGroup: false },

  // Hover Text
  { regex: /hover:text-white/g, replacement: 'hover:text-slate-900 dark:hover:text-white', hasGroup: false },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      for (const { regex, replacement, hasGroup } of replacements) {
        content = content.replace(regex, (...args) => {
          let match = args[0];
          let p1 = hasGroup ? args[1] : null;
          let offset = hasGroup ? args[2] : args[1];
          let string = hasGroup ? args[3] : args[2];
          
          if (string.substring(Math.max(0, offset - 5), offset) === 'dark:') {
            return match;
          }
          if (string.substring(Math.max(0, offset - 9), offset) === 'bg-white ') {
             return match;
          }
          
          if (hasGroup) {
             return replacement.replace('$1', p1);
          }
          return replacement;
        });
      }
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(SRC_DIR);
