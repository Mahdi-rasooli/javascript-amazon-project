
import { renderOrderSummary } from "../../javascripts/checkout/orderSummary.js";
import { loadFromStorage , cart } from "../../data/cart.js";
import { loadProducts } from "../../data/products.js";

describe('test suite: orderSummary', () => {

    const productId1 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
    const productId2 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';

    beforeAll((done) => {
        loadProducts(() => {
           done(); 
        });
    });


    beforeEach(() => {
        document.querySelector('.js-test-container').innerHTML = `
          <div class="js-order-summary"></div>
          <div class="payment-summary"></div>
        `;

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: productId2,
                quantity: 1,
                deliveryOptionId: '2'
            }]);
        });

        loadFromStorage();
        renderOrderSummary();
    });


    it('displays the cart', () => {
        expect(document.querySelectorAll('.cart-item-container').length).toEqual(2);
        expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText).toContain('2');
        expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText).toContain('1');
    });


    it('remove from cart', () => {
        document.querySelector(`.js-delete-link-${productId1}`).click();

        expect(document.querySelectorAll('.cart-item-container').length).toEqual(1);
        expect(document.querySelector(`.js-product-quantity-${productId1}`)).toEqual(null);
        expect(document.querySelector(`.js-product-quantity-${productId2}`)).not.toEqual(null);
        expect(cart.length).toEqual(1);
        expect(cart[0].productId).toEqual(productId2);
    });



    it('update the delivery option' , () => {
        document.querySelector(`.js-delivery-option-${productId1}-3`).click();

        expect(document.querySelector(`.js-delivery-option-input-${productId1}-3`).checked).toEqual(true);

        expect(cart.length).toEqual(2);
        expect(cart[0].productId).toEqual(productId1);
        expect(cart[0].deliveryOptionId).toEqual('3');
        expect(document.querySelector('.js-payment-summary-shipping').innerText).toEqual('$14.98');
        expect(document.querySelector('.js-payment-summary-total').innerText).toEqual('$74.56');
    })


    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = ``;
    });
});


