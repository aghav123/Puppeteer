const puppeteer = require('puppeteer');
const credentials = require('./config');


(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch({executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', headless: false, defaultViewport: null, args: ['--start-maximized']});

  // Open a new page
  const page = await browser.newPage();
  
  // Navigate to the desired webpage
  await page.goto('http://inpun0215nb:3000/');

  const inputXPath = '//html/body/div/div/div/div/div[2]/div[1]/div[2]/div[1]/label/input';
  const inputXPathitembox = '//html/body/div/div/div[2]/div[1]/div/div/div/div/div[3]/div/div/div[1]/div/div/aside/div[2]/form/div[2]/div/div[1]/div/div[2]/div/div/div/div[2]/details[1]/div/label[3]/textarea';
  // Type some text into the input field UNAME
  await page.waitForXPath(inputXPath);
  const inputField = await page.$x(inputXPath);
  if (inputField.length > 0) {
    await inputField[0].type(credentials.username, {delay: 300});
  } else {
    console.error('Input field not found with the specified XPath');
  }

  const inputXPath1 = '//html/body/div/div/div/div/div[2]/div[1]/div[2]/div[2]/label/input';

  // Type some text into the input field PWD
  await page.waitForXPath(inputXPath1);
  const inputField1 = await page.$x(inputXPath1);
  if (inputField.length > 0) {
    await inputField1[0].type(credentials.password , {delay: 300});
  } else {
    console.error('Input field not found with the specified XPath');
  }

  // Click on submit
 await Promise.all([
    page.waitForNavigation(),
    await page.click('[type=submit]')
    
 ])
 await page.waitForTimeout(3000);

 // Click on Folder button
 const buttonSelector = '.aw-commandId-Awp0ShowHomeFolder';
 await page.waitForSelector(buttonSelector);
 await page.click(buttonSelector);
 await page.waitForTimeout(3000);

 // Click on New button

 const newbuttonSelector = '.aw-commandId-Awp0NewGroup';
 await page.waitForSelector(newbuttonSelector);
 await page.click(newbuttonSelector);
 await page.waitForTimeout(2000);

 // Click on Add button

 const addbuttonSelector = '.aw-commandId-Awp0ShowCreateObject';
 await page.waitForSelector(addbuttonSelector);
 await page.click(addbuttonSelector);
 await page.waitForTimeout(3000);

 //select item
 const inputXPath3 = '//html/body/div[1]/div/div[2]/div[1]/div/div/div/div/div[3]/div/div/div[1]/div/div/aside/div[2]/form/div[2]/div/div[1]/div/div[2]/div/div/div/div[1]/details/div/label/div/input';

  // Type some text into the input field PWD
  await page.waitForXPath(inputXPath3);
  const inputField3 = await page.$x(inputXPath3);
  if (inputField.length > 0) {
    await inputField3[0].type('Item' , {delay: 300});
  } else {
    console.error('Input field not found with the specified XPath');
  }

 // Click on Select button

 const buttonXPath = '//html/body/div[2]/div/div/div/ul/li[2]/div/div';
 await page.waitForXPath(buttonXPath);
 const [button] = await page.$x(buttonXPath);
 await button.click();
 await page.waitForTimeout(2000);

 // Type Item Name
 await page.waitForXPath(inputXPathitembox);
 const inputField2 = await page.$x(inputXPathitembox);
 if (inputField.length > 0) {
   await inputField2[0].type('Demo Item', {delay: 300});
 } else {
   console.error('Input field not found with the specified XPath');
 }

  // Click on Add Item 
 const buttonXPathitemadd = '/html/body/div/div/div[2]/div[1]/div/div/div/div/div[3]/div/div/div[1]/div/div/aside/div[2]/form/div[2]/div/div[2]/button';
  await page.waitForXPath(buttonXPathitemadd);

  const [button2] = await page.$x(buttonXPathitemadd);
  await button2.click();
  await page.waitForTimeout(2000);

  //click on "i" BUTTON 

  const buttonXPathi = '/html/body/div/div/div[2]/div[2]/nav/div[1]/div[3]/button';
  await page.waitForXPath(buttonXPathi);

  const [button3] = await page.$x(buttonXPathi);
  await button3.click();
  await page.waitForTimeout(1000);

 // Click on Sign out
  const logoutbuttonSelector = '.aw-commandId-cmdSignOut';
  await page.waitForSelector(logoutbuttonSelector);
  await page.click(logoutbuttonSelector);
  await page.waitForTimeout(2000);
 
  await browser.close();
})();
