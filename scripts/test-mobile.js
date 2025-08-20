const puppeteer = require('puppeteer');

async function testMobileViews() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Test various mobile viewport sizes
  const devices = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone 12', width: 390, height: 844 },
    { name: 'Samsung Galaxy S21', width: 360, height: 800 },
  ];

  for (const device of devices) {
    await page.setViewport({
      width: device.width,
      height: device.height,
      deviceScaleFactor: 2,
    });
    
    await page.goto('http://localhost:3000');
    
    // Test touch targets (minimum 44x44px)
    const buttons = await page.$$('button');
    for (const button of buttons) {
      const box = await button.boundingBox();
      if (box && (box.width < 44 || box.height < 44)) {
        console.warn(`Small touch target on ${device.name}: ${box.width}x${box.height}`);
      }
    }
  }
  
  await browser.close();
}

testMobileViews();