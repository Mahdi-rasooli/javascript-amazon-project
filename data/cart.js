export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

  if (!cart) {
    cart = [{
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

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export function addToCart(productId) {

  /// check wheather item was in the cart or not 
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);


  if (quantitySelector) {
    const quantity = Number(quantitySelector.value);

    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity,
        deliveryOptionId: '1'
      })
    };
  } else {
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId,
        quantity: 1,
        deliveryOptionId: '1'
      })
    };
  }


  saveToStorage();
};


export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((item) => {
    if (item.productId !== productId) {
      newCart.push(item);
    };
  });

  cart = newCart;

  saveToStorage();
};



export function calculateCartQuantity() {

  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  return cartQuantity;
};

export function updateDeliveryOption(productId, deliveryOptionId) {

  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });


  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
};


export function loadCart(func) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log(xhr.response);
    func();
  });

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
};


export async function loadCartFetch() {

  const response = await fetch('https://supersimplebackend.dev/cart');
  const text = await response.text();
  console.log(text);
  return text
}




export function resetCart() {
  cart = [];
  saveToStorage();
};