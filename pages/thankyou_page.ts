import {expect, type Locator,type Page } from "@playwright/test";

export class Thankyoupage{
    //variables
    // getByText('För att aktivera ditt eSIM hittar du din QR-kod inne på Mitt3.')
    readonly page:Page;
    readonly e_sim_qr_label:Locator;
   

  
   
   
    
   
    //constructor
    constructor (page:Page){
        this.page=page;
        this.e_sim_qr_label=page.getByText('För att aktivera ditt eSIM hittar du din QR-kod inne på Mitt3.');
  
        
        
    }


    //methods
    
    async e_sim_qr_verify_visibile(){
        
        


        await this.page.waitForSelector('[class="css-1to3842 e7v5hfm0"]', {timeout: 10000});
        await expect(this.e_sim_qr_label).toBeVisible();
    }
    

}

export default Thankyoupage;