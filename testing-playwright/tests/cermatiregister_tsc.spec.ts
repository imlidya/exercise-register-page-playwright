import { test, Page, chromium, firefox } from '@playwright/test';
import { CermatiRegisterPage } from './CermatiRegisterPage';


test.describe('Register Cermati', () => {
  test('should be successfully login', async ({ page }) => {
    await page.goto('https://www.cermati.com/app/gabung');
    const cermatiRegisterPage = new CermatiRegisterPage(page)

    await cermatiRegisterPage.fillRegisterPage()
    await cermatiRegisterPage.clickCheckBoxTnC()
    await cermatiRegisterPage.clickRegisterButton()
  });

});
