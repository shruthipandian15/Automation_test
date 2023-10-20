import {type Locator,type Page } from "@playwright/test";

export class Numberpage{
    //variables
    readonly page:Page;
   // await page.getByLabel('Nytt nummer').check();
 //await page.getByTestId('checkoutNextButton').click();
    readonly newnumberbutton: Locator;
    readonly nextbutton: Locator;
    
   
    //constructor
    constructor (page:Page){
        this.page=page;
        this.newnumberbutton=page.locator('input[type="radio"][value="NEW_NUMBER"]');
        this.nextbutton=page.getByTestId('checkoutNextButton');
      
        
    }
    //methods
    
    async new_number_check(){
        await this.newnumberbutton.check();
    }
    async next_click(){
        await this.nextbutton.click();
    }
    

    



}

export default Numberpage;