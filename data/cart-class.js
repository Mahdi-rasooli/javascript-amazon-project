
class Cart {
    cartitems;
    #localStorageKey;

    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage() {
        this.cartitems = JSON.parse(localStorage.getItem(this.#localStorageKey));

        if (!this.cartitems) {
            this.cartitems = [{
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '2'
            }];
        };
    }
    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartitems));
    }

    addToCart(productId) {

        let matchingItem;

        this.cartitems.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });

        //const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

        //const quantity = Number(quantitySelector.value);

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cartitems.push({
                productId,
                quantity: 1,
                deliveryOptionId: '1'
            })
        };

        this.saveToStorage();
    }


    removeFromCart(productId) {
        const newCart = [];

        this.cartitems.forEach((item) => {
            if (item.productId !== productId) {
                newithis.cartitems.push(item);
            };
        });

        this.cartitems = newCart;

        this.saveToStorage();
    }

    calculateCartQuantity() {

        let cartQuantity = 0;

        this.cartitems.forEach((item) => {
            cartQuantity += item.quantity;
        });

        return cartQuantity;
    }


    updateDeliveryOption(productId, deliveryOptionId) {

        let matchingItem;

        this.cartitems.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });


        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }
}


const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');


console.log(cart);
console.log(businessCart);
