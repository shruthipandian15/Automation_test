import {type Locator,type Page } from "@playwright/test";

export class Checkoutpage{
    //variables
    readonly page:Page;
    //await page.getByTestId('consent').check();
    //await page.getByTestId('checkoutOrderButton').click();
    readonly terms_checkbox: Locator;
    readonly order_button:Locator;
    readonly e_sim_check:Locator;
    readonly trio_sim_check:Locator;
   
    //constructor
    constructor (page:Page){
        this.page=page;
        this.terms_checkbox= page.getByTestId('consent');
        this.order_button=page.getByTestId('checkoutOrderButton');
        this.e_sim_check=page.getByText('eSIM ingår');
        this.trio_sim_check=page.getByText('SIM-kort ingår');
        
    }


    //methods
    
    async terms_click(){
        await this.page.waitForSelector('[data-testid="consent"]');
        await this.terms_checkbox.click();
    }
    async complete_purchase_click(){
        await this.order_button.click();
    }
    async verfiy_esim(){
        await this.e_sim_check.isVisible();
    }
    async verfiy_triosim(){
        await this.trio_sim_check.isVisible();
    }


}

export default Checkoutpage;