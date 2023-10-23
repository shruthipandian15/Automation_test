import {type Locator,type Page } from "@playwright/test";


export class Broadpdppage{
    //variables
    readonly page:Page;
    //await page.getByLabel('Skaffa ett nytt bredband').check();
    //await page.getByLabel('Zyxel NR5103e0 kr/mån').check();

    readonly new_broadbandbutton: Locator;
    readonly routerbutton:Locator;
 
    //constructor
    constructor (page:Page){
        this.page=page;
        
        this.new_broadbandbutton=page.getByLabel('Skaffa ett nytt bredband');
        this.routerbutton=page.getByLabel('Zyxel NR5103e0 kr/mån');
        
    }   
    //methods
    async select_newbroadband(){
        await this.new_broadbandbutton.check();
    }
    async select_router(){
        await this.routerbutton.check();
    }
    
    

}

export default Broadpdppage;