

import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { log, meta } from 'reporting-labs';
//import { HomePage } from '../src/pages/HomePage';

let loginPage: LoginPage;
//let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    //homePage = new HomePage(page);
});

//AAA
test('login page title test', async () => {

     //REPORTING LAB--adding different fields in Reporting page...after execution
    meta({ priority: 'P1', severity: 'critical', owner: 'Chandu', feature: 'checkout', story: 'SHOP-231' });

    let pageTitle = await loginPage.getLoginPageTitle();
    console.log('Login page title : ', pageTitle);

    //REPORTING LAB--logs generating in console..like abv line 
    await log('Login page title : ', pageTitle);
    
    expect(pageTitle).toBe('Account Login');
});

test.skip('forgot pwd link exist test', async () => {
    expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy();
});

test('user is able to login to app', async () => {
    meta({ priority: 'P1', severity: 'critical', owner: 'naveen', feature: 'checkout', story: 'SHOP-231' })
    await loginPage.doLogin('pwapril@pw.com', 'pw123');
    // expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    // expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
});
