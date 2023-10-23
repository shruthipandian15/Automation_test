import {type Locator,type Page } from "@playwright/test";

export class Homepage{
    //variables
    readonly page:Page;
    //await page.getByRole('button', { name: 'Godkänn alla' }).click();
    //await page.getByRole('link', { name: 'Mobilabonnemang' }).click();
    //await page.getByRole('link', { name: 'Bredband' }).click();
    readonly cookiesbutton: Locator;
    readonly mobilerbutton: Locator;
    readonly mobilesubcriptionbutton: Locator;
    readonly broadbandbutton: Locator;
   

    //constructor
    constructor (page:Page){
        this.page=page;
        this.cookiesbutton=page.getByRole('button', { name: 'Godkänn alla' });
        this.mobilerbutton=page.getByRole('link', { name: 'Mobiler', exact: true });
        this.mobilesubcriptionbutton= page.getByRole('link', { name: 'Mobilabonnemang' });
        this.broadbandbutton= page.getByRole('link', { name: 'Bredband' });
    }
    //methods
    async cookies_click(){
        await this.cookiesbutton.click();
    }
    async mobiler_click(){
        await this.mobilerbutton.click();
    }
    async mobilesubscription_click(){
        await this.mobilesubcriptionbutton.click();
    }
    async broadband_click(){
        await this.broadbandbutton.click();
    }



}

export default Homepage;