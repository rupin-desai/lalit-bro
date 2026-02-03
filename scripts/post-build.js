
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const subDirName = 'digital-marketing-clarity-audit';
const subDirPath = path.join(outDir, subDirName);

if (!fs.existsSync(outDir)) {
    console.error('Error: "out" directory not found. Run "next build" first.');
    process.exit(1);
}

if (!fs.existsSync(subDirPath)) {
    fs.mkdirSync(subDirPath);
}

// Move all files/folders from out to out/digital-marketing-clarity-audit, except the folder itself
const items = fs.readdirSync(outDir);

items.forEach(item => {
    if (item === subDirName) return;

    const oldPath = path.join(outDir, item);
    const newPath = path.join(subDirPath, item);

    fs.renameSync(oldPath, newPath);
});

console.log(`Successfully moved build artifacts to out/${subDirName}`);
