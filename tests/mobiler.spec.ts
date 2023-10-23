import { test, expect, Page, Browser, chromium, ElementHandle } from '@playwright/test';

import { Homepage } from '../pages/home_page';
import { Mobilerpage } from '../pages/mobiler_page';
import { Productdetailpage } from '../pages/productdetail_page';
import { Crosssalepage } from '../pages/cross_sale_page';
import { Numberpage } from '../pages/number_page';
import { Informationpage } from '../pages/infomation_page';
import { Deliverypage } from '../pages/delivery_page';
import { Checkoutpage } from '../pages/checkout_page';
import { Thankyoupage } from '../pages/thankyou_page';
import { Subscriptionpage } from '../pages/mobilesubscription_page';

//Assigning a variable
const URL = 'https://stage.webtest.tre.se/';
let homepage: Homepage;
let mobilerpage: Mobilerpage;
let productdetailpage: Productdetailpage;
let crosssalepage: Crosssalepage;
let numberpage: Numberpage;
let informationpage: Informationpage;
let deliverypage: Deliverypage;
let checkoutpage: Checkoutpage;
let thankyoupage: Thankyoupage;
let subscriptionpage: Subscriptionpage;



//calling a method before all the test
test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    homepage = new Homepage(page);

})

async function cookies_click(page: Page) {
    //await page.getByRole('button', { name: 'Godkänn alla' }).click();
    await homepage.cookies_click();
}

async function mobiler_click(page: Page) {
    //await page.getByRole('link', { name: 'Mobiler', exact: true }).click();
    await homepage.mobiler_click();
}

async function select_mobilesubscription_click(page: Page) {
    //await page.getByRole('link', { name: 'Välj mobilabonnemang' }).click();
    await subscriptionpage.select_mobilesubscription_click();
}

async function iphone13_click(page: Page) {
    //await page.getByRole('link', { name: 'Testar Apple iphone13 Apple iphone13 Från 419 kr/mån med 36 månader delbetalning' }).click();
    await mobilerpage.iphone13_click();
}

async function Samsung_galaxys22_click(page: Page) {
    //await page.getByRole('link', { name: 'Buds Pro ingår! Samsung Galaxy S22 5G Samsung Galaxy S22 5G Från 299 kr/mån med 36 månader delbetalning' }).click();
    await mobilerpage.Samsung_galaxys22_click();
}
async function installment_check(page: Page) {
    //await page.getByLabel('12 mån750 kr/mån').check();

    await productdetailpage.installment_check();
}
async function samsungs22_installment_click(page: Page) {
    //await page.getByLabel('12 mån840 kr/mån').check();
    await productdetailpage.samsung_galaxy_s22_installmentbutton.click();

}

async function subcription_check(page: Page) {
    // await page.getByLabel('20GB299 kr/mån').check();
    await productdetailpage.subcription_check();

}

async function Esim_Yes_click(page: Page) {
    //   await page.getByLabel('Ja').check();
    await productdetailpage.Esim_Yes_click();

}

async function Esim_No_click(page: Page) {
    //   await page.getByLabel('Nej').check();
    await productdetailpage.Esim_No_click();

}
async function moveon_click(page: Page) {
    //  await page.getByRole('link', { name: 'Gå vidare' }).click();
    await productdetailpage.moveon_click();
}
async function appletv_click(page: Page) {
    //await page.getByLabel('Apple TV+ och snabbare surf69 kr/mån\n\nFilm och serier i världsklass\nMegasnabb surf - upp till 1000 Mbit/s').check();
    await crosssalepage.appletv_click();

}
async function moveon_cross_click(page: Page) {
    // await page.getByRole('link', { name: 'Gå vidare' }).click();
    await crosssalepage.moveon_cross_click();

}
async function new_number_check(page: Page) {
    //await page.getByLabel('Nytt nummer').check();
    await numberpage.new_number_check();

}
async function next_click(page: Page) {
    // await page.getByTestId('checkoutNextButton').click();

    await numberpage.next_click();

}

async function personal_number_click(page: Page) {
    //  await page.getByTestId('personNumber').click();
    await informationpage.personal_number_click();
}

async function personalnumber_fill(page: Page) {
    //  await page.getByTestId('personNumber').fill('191212121212');
    await informationpage.personalnumber_fill();
}
async function email_click(page: Page) {
    //await page.getByTestId('email').click();
    await informationpage.email_click();
}
async function email_fill(page: Page) {
    //await page.getByTestId('email').fill('shruthi.pandian@tre.se');

    await informationpage.email_fill();
}
async function contactnumber_click(page: Page) {
    //await page.getByLabel('Kontaktnummer').click();

    await informationpage.contactnumber_click();
}
async function contactnumber_fill(page: Page) {
    //await page.getByLabel('Kontaktnummer').fill('0756234511');

    await informationpage.contactnumber_fill();
}
async function next_info_click(page: Page) {
    //await page.getByTestId('checkoutNextButton').click();
    await informationpage.next_info_click();
}
async function next_Delivery_click(page: Page) {
    //await page.getByTestId('checkoutNextButton').click();
    await deliverypage.next_Delivery_click();
}
async function terms_click(page: Page) {
    //await page.getByTestId('consent').check();
    await checkoutpage.terms_click();

}
async function complete_purchase_click(page: Page) {
    //await page.getByTestId('checkoutOrderButton').click();
    await checkoutpage.complete_purchase_click();

}
async function e_sim_qr_verify_visibile(page: Page) {
    //await page.getByRole('heading', { name: 'Aktivera eSIM via QR-kod' }).click();
    await thankyoupage.e_sim_qr_verify_visibile();

}






test('BUYING A PHONE WITH POSTNORD', async ({ page }) => {

    // Create an instance and initialize it here
    mobilerpage = new Mobilerpage(page);
    productdetailpage = new Productdetailpage(page);
    crosssalepage = new Crosssalepage(page);
    numberpage = new Numberpage(page);
    informationpage = new Informationpage(page);
    deliverypage = new Deliverypage(page);
    checkoutpage = new Checkoutpage(page);

    await homepage.cookies_click();
    await homepage.mobiler_click();
    await mobilerpage.iphone13_click();
    await productdetailpage.installment_check();
    await productdetailpage.subcription_check();
    await productdetailpage.moveon_click();
    const element: ElementHandle | null = await page.$('#content > div.e11740az0.css-15k70ag.e168eykc0 > div > div > div.css-1pin8y8.e6kpghr1 > div.css-1tn1c3y.e6kpghr0 > a');

    if (element) {
        // Scroll to the element
        await element.scrollIntoViewIfNeeded();

        // Click the element
        await element.click();
    } else {
        console.error('Element not found.');
    }
    await crosssalepage.moveon_cross_click();
    await numberpage.new_number_check();
    await numberpage.next_click();
    await informationpage.personal_number_click();
    await informationpage.personalnumber_fill();
    await informationpage.email_click();
    await informationpage.email_fill();
    await informationpage.contactnumber_click();
    await informationpage.contactnumber_fill();
    await informationpage.next_info_click();
    await deliverypage.next_Delivery_click();
    await checkoutpage.terms_click();
    await checkoutpage.complete_purchase_click();
    await page.goto('https://stage.webtest.tre.se/handla/orderbekraftelse?a=i348DXXRRsf-FuQbvqgo-w%3D%3D&bt=b&b=nb&o=n&i=UFrhVZwOW3FCyAAsYRDR_A%3D%3D&stg=HIDE&offerId=v5eL0V_b4XJ-E5zD9B8S-JM1CeZQv4tMNwS6zjQuXL4YskGhh5gx-vXmJq14EiNLgC9LDOPYAv2hc-1RhDjUHWsQ%3D%3D&ot=SOFT_BUNDLE&exu=0&oa=1&st=VOICE');
    await page.waitForTimeout(1000);
});


test('BUYING A PHONE WITH BUDBEE ALONG APPLE TV', async ({ page }) => {


    // Create an instance and initialize it here
    mobilerpage = new Mobilerpage(page);
    productdetailpage = new Productdetailpage(page);
    crosssalepage = new Crosssalepage(page);
    numberpage = new Numberpage(page);
    informationpage = new Informationpage(page);
    deliverypage = new Deliverypage(page);
    checkoutpage = new Checkoutpage(page);

    await homepage.cookies_click();
    await homepage.mobiler_click();
    await mobilerpage.iphone13_click();
    await productdetailpage.installment_check();
    await productdetailpage.subcription_check();
    await productdetailpage.moveon_click();
    await crosssalepage.appletv_click();
    await crosssalepage.moveon_cross_click();
    await numberpage.new_number_check();
    await numberpage.next_click();
    await informationpage.personal_number_click();
    await informationpage.personalnumber_fill();
    await informationpage.email_click();
    await informationpage.email_fill();
    await informationpage.contactnumber_click();
    await informationpage.contactnumber_fill();
    await informationpage.next_info_click();
    await deliverypage.postalnumber_click();
    await deliverypage.postalnumber_fill();
    await deliverypage.deliveryaddress_click();
    await deliverypage.deliveryaddress_fill();
    await deliverypage.careof_click();
    await deliverypage.careof_fill();
    await deliverypage.city_click();
    await deliverypage.city_fill();
    await deliverypage.next_Delivery_click();
    await checkoutpage.terms_click();
    await checkoutpage.complete_purchase_click();
    await page.goto('https://stage.webtest.tre.se/handla/orderbekraftelse?a=sLKI8QL_JYtrrYh1kQ51PA%3D%3D&bt=b&b=nb&o=n&i=UFrhVZwOW3FCyAAsYRDR_A%3D%3D&stg=HIDE&offerId=v5eL0V_b4XJ-E5zD9B8S-JM1CeZQv4tMNwS6zjQuXL4YskGhh5gx-vXmJq14EiNLgC9LDOPYAv2hc-1RhDjUHWsQ%3D%3D&ot=SOFT_BUNDLE&sct=TRIOSIM&exu=0&oa=1&st=VOICE')
    await page.waitForTimeout(1000);
});


test('BUYING A ANDRIOD PHONE WITH (E-SIM)', async ({ page }) => {


    // Create an instance and initialize it here
    mobilerpage = new Mobilerpage(page);
    productdetailpage = new Productdetailpage(page);
    crosssalepage = new Crosssalepage(page);
    numberpage = new Numberpage(page);
    informationpage = new Informationpage(page);
    deliverypage = new Deliverypage(page);
    checkoutpage = new Checkoutpage(page);
    thankyoupage = new Thankyoupage(page);

    await homepage.cookies_click();
    await homepage.mobiler_click();
    await mobilerpage.Samsung_galaxys22_click();
    await productdetailpage.samsungs22_installment_click();
    await productdetailpage.subcription_check();
    await productdetailpage.Esim_Yes_click();
    await productdetailpage.moveon_click();
    await crosssalepage.appletv_click();
    await crosssalepage.moveon_cross_click();
    await numberpage.new_number_check();
    await numberpage.next_click();
    await informationpage.personal_number_click();
    await informationpage.personalnumber_fill();
    await informationpage.email_click();
    await informationpage.email_fill();
    await informationpage.contactnumber_click();
    await informationpage.contactnumber_fill();
    await informationpage.next_info_click();
    await deliverypage.next_Delivery_click();

    await checkoutpage.verfiy_esim();
    await checkoutpage.terms_click();
    await checkoutpage.complete_purchase_click();

    await page.goto('https://stage.webtest.tre.se/handla/orderbekraftelse?a=sLKI8QL_JYtrrYh1kQ51PA%3D%3D&bt=b&b=nb&o=n&i=UFrhVZwOW3FCyAAsYRDR_A%3D%3D&stg=HIDE&offerId=v5eL0V_b4XJ-E5zD9B8S-JM1CeZQv4tMNwS6zjQuXL4YskGhh5gx-vXmJq14EiNLgC9LDOPYAv2hc-1RhDjUHWsQ%3D%3D&ot=SOFT_BUNDLE&sct=TRIOSIM&exu=0&oa=1&st=VOICE')

});




test('BUYING A SUBSCRIPTION WITH APPLE TV(TRIO_SIM)', async ({ page }) => {


    // Create an instance and initialize it here

    subscriptionpage = new Subscriptionpage(page);
    productdetailpage = new Productdetailpage(page);
    crosssalepage = new Crosssalepage(page);
    numberpage = new Numberpage(page);
    informationpage = new Informationpage(page);
    deliverypage = new Deliverypage(page);
    checkoutpage = new Checkoutpage(page);
    thankyoupage = new Thankyoupage(page);

    await homepage.cookies_click();
    await homepage.mobilesubscription_click();
    await subscriptionpage.select_mobilesubscription_click();

    await productdetailpage.subcription_check();
    await productdetailpage.Esim_No_click();
    await productdetailpage.moveon_click();
    await crosssalepage.appletv_click();
    await crosssalepage.moveon_cross_click();
    await numberpage.new_number_check();
    await numberpage.next_click();
    await informationpage.personal_number_click();
    await informationpage.personalnumber_fill();
    await informationpage.email_click();
    await informationpage.email_fill();
    await informationpage.contactnumber_click();
    await informationpage.contactnumber_fill();
    await informationpage.next_info_click();
    await checkoutpage.verfiy_triosim();
    await checkoutpage.terms_click();
    await checkoutpage.complete_purchase_click();

    await page.goto('https://stage.webtest.tre.se/handla/orderbekraftelse?a=sLKI8QL_JYtrrYh1kQ51PA%3D%3D&bt=pp&b=nb&o=n&stg=HIDE&offerId=v35bw4X18OpOA06O9xN-Ew1M4X0i-3dKfu56u0rPUl6To38KQSzpbDCwR_Ln9WHYiv&sct=TRIOSIM&exu=0&oa=1&st=VOICE')


});