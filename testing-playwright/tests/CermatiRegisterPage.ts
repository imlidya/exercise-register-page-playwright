import {expect, Page } from "@playwright/test";

const classConstant = {
    frmEmail : "xpath=//input[@id='email' and @placeholder='Masukkan Email']",
    frmNomorHandphone : "xpath=//input[@id='mobilePhone' and @placeholder='Masukkan No. Handphone']",
    frmKataSandi : "xpath=//input[@id='password' and @placeholder='Masukkan Kata Sandi']",
    frmUlangiKataSandi : "xpath=//input[@id='confirmPassword' and @placeholder='Masukkan Kata Sandi']",
    frmNamaDepan : "xpath=//input[@id='firstName' and @placeholder='Masukkan Nama Depan']",
    frmNamaBelakang : "xpath=//input[@id='lastName' and @placeholder='Masukkan Nama Belakang']",
    ddlKotaKabupaten : "xpath=//input[@id='cityAndProvince']",
    lblKotaMakassar : "xpath=//button[@name='KOTA MAKASSAR']",
    checkboxTnC : "xpath=//span[@class='TermsAndConditions_checkbox__text__ZPxfq']",
    btnDaftar : "xpath=//p[contains(text(), 'Daftar')]" 
}

export class CermatiRegisterPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    //function
    async fillRegisterPage() {
        await this.page.waitForLoadState()
        await this.page.locator(classConstant.frmEmail).fill('testing@yopmail.com');
        await this.page.locator(classConstant.frmNomorHandphone).fill('081337348585');
        await this.page.locator(classConstant.frmKataSandi).fill('2838293931Gg');
        await this.page.locator(classConstant.frmUlangiKataSandi).fill('2838293931Gg');
        await this.page.locator(classConstant.frmNamaDepan).fill('Lidya');
        await this.page.locator(classConstant.frmNamaBelakang).fill('Testing');
        this.chooseKotaKabupaten();
        console.log('fill register page')
    }

    async chooseKotaKabupaten() {
        await this.page.waitForLoadState();
        await this.page.locator(classConstant.ddlKotaKabupaten).click();
        await this.page.locator(classConstant.ddlKotaKabupaten).fill('Makassar');
        await this.page.locator(classConstant.lblKotaMakassar).click();
        console.log('select kabupaten/kota');
    }

    async clickCheckBoxTnC() {
        await this.page.waitForLoadState();
        await this.page.locator(classConstant.checkboxTnC).click();
        console.log('click checkbox TnC');
    }

    async clickRegisterButton() {
        await this.page.waitForLoadState();
        await this.page.locator(classConstant.btnDaftar).click();
        console.log('click register button');
    }
}