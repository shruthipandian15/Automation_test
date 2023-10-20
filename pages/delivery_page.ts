import {type Locator,type Page } from "@playwright/test";

export class Deliverypage{
    //variables
    readonly page:Page;
   // await page.getByTestId('checkoutNextButton').click();
   //await page.getByLabel('Postnummer').click();
   //await page.getByLabel('Postnummer').fill('14649');
   //await page.getByLabel('Leveransadress').click();
  //await page.getByLabel('Leveransadress').fill('petunievagen');
  //await page.getByLabel('C/o').click();
  //await page.getByLabel('C/o').fill('pandian');
  //await page.getByLabel('Stad').click();
  //await page.getByLabel('Stad').fill('tullinge');
    
    readonly next_deliverybutton:Locator;
    readonly postalnumber_textbox:Locator;
    readonly postalnumberfill:Locator;
    readonly deliveryaddress_textbox:Locator;
    readonly deliveryaddressfill:Locator;
    readonly careof_textbox:Locator;
    readonly careoffill:Locator;
    readonly city_textbox:Locator;
    readonly cityfill:Locator;
   
    //constructor
    constructor (page:Page){
        this.page=page;
        this.next_deliverybutton=page.getByTestId('checkoutNextButton');
        this.postalnumber_textbox=page.getByLabel('Postnummer');
        this.postalnumberfill=page.getByLabel('Postnummer');
        this.deliveryaddress_textbox=page.getByLabel('Leveransadress');
        this.deliveryaddressfill=page.getByLabel('Leveransadress');
        this.careof_textbox=page.getByLabel('C/o');
        this.careoffill=page.getByLabel('C/o');
        this.city_textbox=page.getByLabel('Stad');
        this.cityfill=page.getByLabel('Stad');
        
    }
    //methods
 

       async next_Delivery_click() {
        await this.page.waitForTimeout(1000);
        await this.next_deliverybutton.click();
  
    }
    async postalnumber_click() {
        
        await this.postalnumber_textbox.click();
  
    }

    async postalnumber_fill() {
        
        await this.postalnumberfill.fill('14649');
  
    }
    async deliveryaddress_click() {
        
        await this.deliveryaddress_textbox.click();
  
    } 
    async deliveryaddress_fill() {
        
        await this.deliveryaddressfill.fill('petunievagen');
  
    }
    async careof_click() {
        
        await this.careof_textbox.click();
    }
    async careof_fill() {
        
        await this.careoffill.fill('pandian');
    }


   async city_click() {
        
        await this.city_textbox.click();
    }
    async city_fill() {
        
        await this.cityfill.fill('tullinge');
    }
   


}

export default Deliverypage;



//https://stage.webtest.tre.se/handla/orderbekraftelse?a=sLKI8QL_JYtrrYh1kQ51PA%3D%3D&bt=b&b=nb&o=n&i=UFrhVZwOW3FCyAAsYRDR_A%3D%3D&stg=HIDE&offerId=v5eL0V_b4XJ-E5zD9B8S-JM1CeZQv4tMNwS6zjQuXL4YskGhh5gx-vXmJq14EiNLgC9LDOPYAv2hc-1RhDjUHWsQ%3D%3D&ot=SOFT_BUNDLE&sct=TRIOSIM&exu=0&oa=1&st=VOICE