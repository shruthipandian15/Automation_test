import {type Locator,type Page } from "@playwright/test";

export class Crosssalepage{
    //variables
    readonly page:Page;
   // await page.getByRole('link', { name: 'Gå vidare' }).click();
   //await page.getByLabel('Apple TV+ och snabbare surf69 kr/mån\n\nFilm och serier i världsklass\nMegasnabb surf - upp till 1000 Mbit/s').check();
    
    readonly moveon_crosssalebutton:Locator;
    readonly appletv_button:Locator;
   
    //constructor
    constructor (page:Page){
        this.page=page;
        this.moveon_crosssalebutton=page.getByRole('link', { name: 'Gå vidare' });
        this.appletv_button=page.getByLabel('Apple TV+ och snabbare surf69 kr/mån\n\nFilm och serier i världsklass\nMegasnabb surf - upp till 1000 Mbit/s');
       
        
    }
    
    //methods
    
    async moveon_cross_click(){
        await this.page.waitForTimeout(2000);
        await this.moveon_crosssalebutton.click();
    }
   
    async appletv_click(){
        await this.appletv_button.check();
    }
   
    



}

export default Crosssalepage;