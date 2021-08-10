const {When, Then, Given, And} = require("@cucumber/cucumber");
const puppeteer = require('puppeteer');
const assert = require('assert');
const constants = require('./support/constants');

Given('Böngésző megnyitása', async function(){
    this.browser = await puppeteer.launch({
        headless: false
    });
});

When('Betöltődik az outlook.com', async function () {
    this.page = await this.browser.newPage();
    await this.page.goto(constants.url);
});

When('Bejelentkezés gomb-ra kattintás', async function() {
    const login = await this.page.$x("//a[contains(text(), 'Bejelentkezés')]");
    await login[0].click();
});

When('{string} beírása és továbblépés', async function(username) {
    await this.page.waitForSelector('input[type="email"]')
    await this.page.type('input[type="email"]', username);
    await this.page.keyboard.press('Enter');
});

When('{string} jelszó beírása és továbblépés', async function(pwd) {
    await this.page.waitForSelector('input[type="password"]');
    await this.page.type('input[type="password"]', pwd);
    await this.page.waitForTimeout(1000)
    await this.page.keyboard.press('Enter');
});

When ('Ellenőrzés', async function() {
    await this.page.waitForTimeout(1000);
    if( await this.page.$('div[id=passwordError]') != null){
        this.logfeature = "Sikertelen";
    } else {
        await this.page.click('input[id="idBtn_Back"]');
        await this.page.waitForTimeout(1000);
        this.logfeature = "Sikeres";
    }
});

Then('{string} bejelentkezés', async function(aktualis_valasz) {
    assert.equal(aktualis_valasz, this.logfeature);
});




