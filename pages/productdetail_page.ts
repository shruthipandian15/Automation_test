import {type Locator,type Page} from "@playwright/test";

export class Productdetailpage{
    //variables
    readonly page:Page;
   // await page.getByLabel('12 mån750 kr/mån').check();
   //await page.getByLabel('12 mån840 kr/mån').check();
   //await page.getByLabel('Ja').check();
    //await page.getByLabel('Nej').check();

    readonly installmentbutton: Locator;
    readonly subcriptionbutton: Locator;
    readonly moveonbutton:Locator;
    readonly samsung_galaxy_s22_installmentbutton:Locator;
    readonly esim_yes_button:Locator;
    readonly esim_no_button:Locator;

    
    //constructor
    constructor (page:Page){
        this.page=page;
        this.installmentbutton=page.getByLabel('12 mån750 kr/mån');
        this.subcriptionbutton=page.getByLabel('20GB299 kr/mån');
        this.samsung_galaxy_s22_installmentbutton=page.getByLabel('12 mån840 kr/mån');
        this.esim_yes_button=page.locator('input[type="radio"][value="ESIM"]');
        this.esim_no_button= page.getByLabel('Nej');
        this.moveonbutton=page.getByRole('link', { name: 'Gå vidare' });
        
    }


    //methods
    
    async installment_check(){
        await this.page.waitForTimeout(1000);
        await this.installmentbutton.check();
    }
    async subcription_check(){ 
        await this.page.waitForTimeout(1000);

        await this.subcriptionbutton.check();
    }
    async samsungs22_installment_click(){

        await this.samsung_galaxy_s22_installmentbutton.check();
            
    }
    async Esim_Yes_click(){

        await this.esim_yes_button.click();
            
    }
    async Esim_No_click(){

        await this.esim_no_button.check();
            
    }


    async moveon_click(){

        await this.moveonbutton.click();
            
    }


    



}

export default Productdetailpage;