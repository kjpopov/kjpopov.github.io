const puppeteer = require('puppeteer');

(async function () {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1070, height: 717 });
    await page.goto('http://localhost:8000/print', { "waitUntil": 'networkidle2' }).catch(function () {
        console.log('Error while loading up the url.');
    });
    await page.pdf({ path: './thekras.pdf', format: 'A4', printBackground: true });
    browser.close();
})();
