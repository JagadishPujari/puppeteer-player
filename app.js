const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];
const select = require ('puppeteer-select');
const eventBus = require('js-event-bus')();
const jsdom = require('jsdom');
const $ = require('jquery')(new jsdom.JSDOM().window);
puppeteer.launch({headless:false}).then(async browser => {
  	const page = await browser.newPage();
  	await page.emulate(iPhonex);
  	// await page.setViewport({ width: 1366, height: 768});
  	await page.goto('localhost:4000', {waitUntil: 'domcontentloaded'});
	await page.screenshot({path: 'question.png'});
	await page.waitFor(2000); 
	const frame = await page.frames().find(f => f.name() === 'questionset');
	const result = await frame.evaluate((e) => {
		// EkstepRendererAPI.dispatchEvent("renderer:navigation:next")
		console.log("Jags",org.ekstep);
	})
	  
});
// eventBus.emit('renderer:navigation:next');