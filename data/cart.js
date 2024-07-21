export const cart = [];

export function addToCart(productId) {

    /// check wheather item was in the cart or not 
    let matchingItem;
  
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
  
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  
    const quantity = Number(quantitySelector.value);
  
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId,
        quantity
      })
    };
  }