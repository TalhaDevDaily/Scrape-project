export const CART_UPDATED_EVENT = "af-cart-updated";

export const addCartItem = (product) => {
  window.dispatchEvent(
    new CustomEvent(CART_UPDATED_EVENT, {
      detail: { product },
    }),
  );
};
