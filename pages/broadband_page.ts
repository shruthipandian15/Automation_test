import {type Locator,type Page } from "@playwright/test";


export class Broadbandpage{
    //variables
    readonly page:Page;
    //await page.getByPlaceholder('ex, Storgatan 3, Stockholm').click();
   // await page.getByPlaceholder('ex, Storgatan 3, Stockholm').fill('petunievägen 15');
   //  await page.getByRole('option', { name: 'Petunievägen 15, 14649 Tullinge' }).click();

    readonly searchaddress_textbox: Locator;
    readonly searchaddress_textbox_fill:Locator;
    readonly searchaddress_dropdown:Locator;
    //constructor
    constructor (page:Page){
        this.page=page;
        
        this.searchaddress_textbox=page.getByPlaceholder('ex, Storgatan 3, Stockholm');
        this.searchaddress_textbox_fill=page.getByPlaceholder('ex, Storgatan 3, Stockholm');
        this.searchaddress_dropdown= page.getByRole('option', { name: 'Petunievägen 15, 14649 Tullinge' });
    }   
    //methods
    async click_address(){
        await this.searchaddress_textbox.click();
    }
    async fill_address(){
        await this.searchaddress_textbox_fill.fill('petunievägen 15');
    }
    async select_address(){
        await this.searchaddress_dropdown.click();
    }
    

}

export default Broadbandpage;