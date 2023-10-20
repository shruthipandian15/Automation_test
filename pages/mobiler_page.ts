import {type Locator,type Page } from "@playwright/test";

export class Mobilerpage{
    //variables
    readonly page:Page;
    //await page.getByRole('link', { name: 'Testar Apple iphone13 Apple iphone13 Från 419 kr/mån med 36 månader delbetalning' }).click();
    //await page.getByRole('link', { name: 'Buds Pro ingår! Samsung Galaxy S22 5G Samsung Galaxy S22 5G Från 299 kr/mån med 36 månader delbetalning' }).click();
    
    readonly apple13button: Locator;
    readonly apple13buttondescription: string='iphone13';
    readonly samsunggalaxy_s22:Locator;
    readonly  samsunggalaxy_s22description:string='Galaxy S22 5G';
   
    //constructor
    constructor (page:Page){
        this.page=page;
        this.apple13button=page.getByText(this.apple13buttondescription);
        
        this.samsunggalaxy_s22=page.getByText(this.samsunggalaxy_s22description);
    }


    //methods
    
    async iphone13_click(){
        await this.apple13button.click();
    }
    async Samsung_galaxys22_click(){
        await this.samsunggalaxy_s22.click();
    }




}

export default Mobilerpage;

