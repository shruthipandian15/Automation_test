import {type Locator,type Page } from "@playwright/test";

export class Informationpage{
    //variables
    readonly page:Page;
  //await page.getByTestId('personNumber').click();
  //await page.getByTestId('personNumber').fill('191212121212');
  //await page.getByTestId('email').click();
  //await page.getByTestId('email').fill('shruthi.pandian@tre.se');
  //await page.getByLabel('Kontaktnummer').click();
  //await page.getByLabel('Kontaktnummer').fill('0756234511');
  //await page.getByTestId('checkoutNextButton').click();

    readonly personalnumbertext_box: Locator;
    readonly personalnumberfill: Locator;
    readonly emailtextbox: Locator;
    readonly emailfill: Locator;
    readonly contactnumbertext_box: Locator;
    readonly contactnumberfill: Locator;
    readonly checkoutnextbutton: Locator;
    


    
   
    //constructor
    constructor (page:Page){
        this.page=page;
        this.personalnumbertext_box=page.getByTestId('personNumber');
        this.personalnumberfill=page.getByTestId('personNumber');
        this.emailtextbox=page.getByTestId('email');
        this.emailfill=page.getByTestId('email');
        this.contactnumbertext_box=page.getByLabel('Kontaktnummer');
        this.contactnumberfill=page.getByLabel('Kontaktnummer');
        this.checkoutnextbutton=page.getByTestId('checkoutNextButton');
      
        
    }
    //methods
    
    async personal_number_click(){
        await this.personalnumbertext_box.click();
    }
    async personalnumber_fill(){
        await this.personalnumberfill.fill('191212121212');
    }
    async email_click(){
        await this.emailtextbox.click();
    }
    async email_fill(){
        await this.emailfill.fill('shruthi.pandian@tre.se');
    }
    async contactnumber_click(){
        await this.contactnumbertext_box.click();
    }
    async contactnumber_fill(){
        await this.contactnumberfill.fill('0756234511');
    }
    async next_info_click(){
        await this.checkoutnextbutton.click();
    }






    



}

export default Informationpage;