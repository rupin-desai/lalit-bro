import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const XLSX = require('xlsx');
import path from 'path';
import fs from 'fs';

const filePath = path.join(process.cwd(), 'public', 'Final Landing Page.xlsx');
try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    // Use header:1 to get array of arrays which might be easier to parse if structure is irregular
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    fs.writeFileSync('excel_content.json', JSON.stringify(data, null, 2));
    console.log("Written to excel_content.json");
} catch (error) {
    console.error("Error reading file:", error.message);
}
