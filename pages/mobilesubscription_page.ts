import {type Locator,type Page } from "@playwright/test";


export class Subscriptionpage{
    //variables
    readonly page:Page;
   //await page.getByRole('link', { name: 'Välj mobilabonnemang' }).click();

    readonly select_mobilesubcriptionbutton: Locator;
    //constructor
    constructor (page:Page){
        this.page=page;
        
        this.select_mobilesubcriptionbutton= page.getByRole('link', { name: 'Välj mobilabonnemang' });
    }   
    //methods
    async select_mobilesubscription_click(){
        await this.select_mobilesubcriptionbutton.click();
    }
    

}

export default Subscriptionpage;