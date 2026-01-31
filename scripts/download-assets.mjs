import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://inversweb.com/product/html/reeni/';
const projectRoot = path.join(__dirname, '..'); // Assuming script is in /scripts
const assetsDir = path.join(projectRoot, 'public/assets/reeni');

// List of assets identified from the HTML analysis
const assets = [
    'assets/images/logo/logo-white.png',
    'assets/images/logo/white-logo-reeni.png',
    'assets/images/banner/banner-user-image-one.png',
    'assets/images/custom-line/custom-line.png',
    'assets/images/services/latest-services-user-image-white.png',
    'assets/images/latest-portfolio/portfoli-img-1.jpg',
    'assets/images/latest-portfolio/portfoli-img-2.jpg',
    'assets/images/latest-portfolio/portfoli-img-3.jpg',
    'assets/images/experiences/expert-img.jpg'
];

async function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        await fs.promises.mkdir(dir, { recursive: true });
    }
}

async function downloadFile(url, dest) {
    try {
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream'
        });

        const writer = fs.createWriteStream(dest);

        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        if (error.response) {
            throw new Error(`Server responded with ${error.response.status}`);
        }
        throw error;
    }
}

async function downloadAll() {
    console.log('Starting asset download...');
    await ensureDir(assetsDir);

    for (const assetPath of assets) {
        const url = baseUrl + assetPath;
        const filename = path.basename(assetPath);
        const dest = path.join(assetsDir, filename);

        try {
            console.log(`Downloading ${filename}...`);
            await downloadFile(url, dest);
            console.log(`✓ Saved to ${dest}`);
        } catch (error) {
            console.error(`✗ Failed to download ${filename}: ${error.message}`);
        }
    }
    console.log('Download complete!');
}

downloadAll();
