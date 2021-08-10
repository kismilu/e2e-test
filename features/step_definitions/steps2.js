const {When, Then, Given, And, setDefaultTimeout} = require("@cucumber/cucumber");
const puppeteer = require('puppeteer');
const assert = require('assert');
const constants = require('./support/constants');
const targy = constants.makeid(constants.subjecthossz);

setDefaultTimeout(30*1000);

Given('Új üzenet gombra kattintás', async function () {
    await this.page.waitForXPath("//button[contains(., 'Új üzenet')]");
    const ujuzenet = await this.page.$x("//button[contains(., 'Új üzenet')]");
    await ujuzenet[0].click();
});

When('Címzett mezőjének kitöltése', async function () {
    await this.page.waitForSelector('[aria-label="Címzett"]');
    await this.page.type('[aria-label="Címzett"]', constants.email);
});

When('Tárgy mezőjének kitöltése', async function () {
    await this.page.waitForSelector('[aria-label="Adja meg a tárgyat"]');
    await this.page.type('[aria-label="Adja meg a tárgyat"]', targy);
});

When('Elküld gomb megnyomása', async function () {
    await this.page.waitForSelector('[aria-label="Küldés"]');
    await this.page.click('[aria-label="Küldés"]');
});

Then('{string} elküldött levél', async function (answer) {
    await this.page.waitForSelector('[data-icon-name="GlobalNavButton"]');
    await this.page.click('[data-icon-name="GlobalNavButton"]');
    await this.page.waitForSelector('[title="Elküldött elemek"]');
    await this.page.click('[title="Elküldött elemek"]');
    if((await this.page.$x("//span[contains(.,\'"+ targy +"\')]")) == null) {
        assert.equal(answer,"Sikertelen");
    } else {
        assert.equal(answer,"Sikeres");
    }
});

Then('Takarítás', async function () {
    await this.page.waitForSelector('[name="Mappa ürítése"]');
    await this.page.click('[name="Mappa ürítése"]');
    await this.page.waitForTimeout(3000);
    await this.page.waitForXPath("//button[contains(., 'Az összes törlése')]");
    const mappaurit = await this.page.$x("//button[contains(., 'Az összes törlése')]");
    await mappaurit[0].click();
    await this.page.waitForTimeout(2000);
});