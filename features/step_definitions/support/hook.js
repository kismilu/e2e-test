const { BeforeAll, AfterAll, Before, After, setDefaultTimeout} = require('@cucumber/cucumber')
const constants = require('./constants');
const puppeteer = require('puppeteer');

Before("@sentscen",  async function () {
    this.browser = await puppeteer.launch({
        headless: false
    });
    this.page = await this.browser.newPage();
    await this.page.goto(constants.url);

    const login = await this.page.$x("//a[contains(text(), 'Bejelentkezés')]");
    await login[0].click();

    await this.page.waitForSelector('input[type="email"]')
    await this.page.type('input[type="email"]', constants.username);
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('Enter');

    await this.page.waitForSelector('input[type="password"]');
    await this.page.type('input[type="password"]', constants.pwd);
    await this.page.waitForTimeout(2000);

    await this.page.keyboard.press('Enter');
    await this.page.waitForSelector('input[id="idBtn_Back"]');
    await this.page.click('input[id="idBtn_Back"]');
})

After(async function () {
    await this.browser.close();   
})