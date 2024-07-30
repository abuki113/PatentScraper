const { chromium, firefox, webkit } = require('playwright');

(async () => {
  // Check Chromium
  const chromiumBrowser = await chromium.launch();
  console.log('Chromium is installed');
  await chromiumBrowser.close();

  // Check Firefox
  const firefoxBrowser = await firefox.launch();
  console.log('Firefox is installed');
  await firefoxBrowser.close();

  // Check WebKit
  const webkitBrowser = await webkit.launch();
  console.log('WebKit is installed');
  await webkitBrowser.close();
})();
