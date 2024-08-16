import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts , loadProductsFetch } from "../data/products.js";
//import '../data/cart-class.js'
//import '../data/car.js';
//import '../data/backend-practice.js';
import { loadCart , loadCartFetch } from "../data/cart.js";


async function loadPage() {


    try {

        await Promise.all([
            loadProductsFetch(), 
            loadCartFetch()
        ])

        //throw 'error1'

        /*const value = await new Promise((resolve , reject) => {
            //throw 'error2'

            loadCart(() => {
                //reject('error 3');
                resolve();
            });
        });*/

    } catch (error) {
        console.log('error please try it again later', error);
    }

    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
};

loadPage();



/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values)
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
})
*/

/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve('value 1');
    });

}).then((value) => {
    console.log(value)
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(() => {
    loadCart(() => {
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
