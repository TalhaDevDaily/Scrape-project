export const CART_UPDATED_EVENT = "af-cart-updated";

const CART_STORAGE_KEY = "af-cart-items";

export const readStoredCart = () => {
  try {
    const saved = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const getCartItemCount = () =>
  readStoredCart().reduce(
    (total, item) => total + Number(item.quantity || 0),
    0,
  );

export const emitCartUpdated = (items = readStoredCart()) => {
  window.dispatchEvent(
    new CustomEvent(CART_UPDATED_EVENT, {
      detail: { items },
    }),
  );
};

export const addCartItem = (product) => {
  window.dispatchEvent(
    new CustomEvent(CART_UPDATED_EVENT, {
      detail: { product },
    }),
  );
};
