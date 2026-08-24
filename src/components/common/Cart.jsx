import { useEffect, useMemo, useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart, FaTrash } from "react-icons/fa";
import { CART_UPDATED_EVENT, emitCartUpdated } from "./cartEvents";

const CART_STORAGE_KEY = "af-cart-items";

const readStoredCart = () => {
  try {
    const saved = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const normalizeProduct = (product) => ({
  id: product.id,
  name: product.name,
  price: Number(product.price),
  quantity: 1,
  delivery: product.delivery,
});

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Cart = ({ isOpen, onClose }) => {
  const [items, setItems] = useState(readStoredCart);

  useEffect(() => {
    const handleCartUpdate = (event) => {
      const product = event.detail?.product;
      if (!product) return;

      setItems((current) => {
        const existing = current.find((item) => item.id === product.id);
        if (existing) {
          return current.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          );
        }
        return [...current, normalizeProduct(product)];
      });
    };

    window.addEventListener(CART_UPDATED_EVENT, handleCartUpdate);
    return () => window.removeEventListener(CART_UPDATED_EVENT, handleCartUpdate);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage is optional; cart state still works for the current session.
    }
    emitCartUpdated(items);
  }, [items]);

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  const updateQuantity = (id, delta) => {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  const resetCart = () => setItems([]);

  return (
    <div
      aria-hidden={!isOpen}
      onClick={onClose}
      className={`fixed inset-0 z-95 transition-[visibility] duration-600 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="absolute inset-0 bg-black/50" />

      <aside
        onClick={(event) => event.stopPropagation()}
        className={`af-cart-drawer absolute inset-y-0 right-0 flex w-[min(430px,94vw)] flex-col border-l border-white/15 bg-gradient-to-b from-[#17191f] to-[#0e0f13] shadow-[-40px_0_90px_-30px_rgba(0,0,0,0.85)] transition-transform duration-[650ms] ease-[cubic-bezier(.22,1.12,.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-[105%]"
        }`}
      >
        <div className="af-cart-header">
          <h2 className="af-cart-title">
            Cart <span>{itemCount}</span>
          </h2>
          <button
            type="button"
            className="af-cart-close"
            onClick={onClose}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="af-cart-empty">
            <div className="af-cart-empty__icon">
              <FaShoppingCart />
            </div>
            <h3>Cart is empty</h3>
            <p>Add items from the catalog — they will show up here.</p>
            <button type="button" className="af-btn af-btn--cart" onClick={onClose}>
              Browse catalog
            </button>
          </div>
        ) : (
          <>
            <div className="af-cart-body">
              {items.map((item) => (
                <div className="af-cart-item" key={item.id}>
                  <div className="af-cart-item__copy">
                    <h3>{item.name}</h3>
                    <p>{item.delivery}</p>
                  </div>

                  <div className="af-cart-item__meta">
                    <div className="af-cart-qty" aria-label={`Quantity for ${item.name}`}>
                      <button
                        type="button"
                        aria-label={`Decrease quantity for ${item.name}`}
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <FaMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity for ${item.name}`}
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <FaPlus />
                      </button>
                    </div>

                    <div className="af-cart-item__row">
                      <strong>{currency.format(item.price * item.quantity)}</strong>
                      <button
                        type="button"
                        className="af-cart-delete"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Delete ${item.name}`}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="af-cart-footer">
              <div className="af-cart-total">
                <span>Total</span>
                <strong>{currency.format(subtotal)}</strong>
              </div>

              <button type="button" className="af-cart-checkout">
                Checkout
                <span aria-hidden="true">→</span>
              </button>

              <div className="af-cart-note">
                <span>Any bank&apos;s card · 3D Secure · card details not stored</span>
                <span>Public offer</span>
              </div>

              <button
                type="button"
                className="af-cart-link"
                onClick={() => {
                  resetCart();
                  onClose();
                }}
              >
                Open full cart
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
};

export default Cart;
