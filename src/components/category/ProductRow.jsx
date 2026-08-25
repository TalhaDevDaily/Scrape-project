import { useEffect, useState } from "react";
import { isFavoriteItem, toggleFavoriteItem } from "../common/favoritesEvents";
import { Link } from "react-router";
import { FaBell, FaHeart, FaShoppingCart } from "react-icons/fa";
import { addCartItem } from "../common/cartEvents";

const ProductRow = ({ product, index }) => {
  const isAvailable = !product.delivery.toLowerCase().includes("out");
  const [isFavorite, setIsFavorite] = useState(() =>
    isFavoriteItem(product.id),
  );

  useEffect(() => {
    const syncFavorite = () => setIsFavorite(isFavoriteItem(product.id));
    window.addEventListener("af-favorites-updated", syncFavorite);
    return () =>
      window.removeEventListener("af-favorites-updated", syncFavorite);
  }, [product.id]);

  return (
    <article
      className="af-prod"
      data-reveal="true"
      style={{ "--d": `${index * 0.05}s` }}
    >
      <Link className="af-prod__main" to={`/product/${product.id}`}>
        <div className="af-prod__logo" aria-hidden="true">
          <span>{product.badge}</span>
        </div>
        <div className="af-prod__copy">
          <p className="af-prod__eyebrow">
            {isAvailable ? "Ready to deliver" : "Currently unavailable"}
          </p>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </Link>
      <button
        className={`af-fav ${isFavorite ? "is-active" : ""}`}
        type="button"
        onClick={() => {
          toggleFavoriteItem(product);
          setIsFavorite((current) => !current);
        }}
        aria-label={`Add ${product.name} to favorites`}
      >
        <FaHeart />
      </button>
      <div className="af-prod__side">
        <button
          className="af-bell"
          type="button"
          aria-label={isAvailable ? "Product alerts" : "Notify when available"}
        >
          <FaBell />
        </button>
        <strong>${product.price}</strong>
        <span className={isAvailable ? "af-stock" : "af-out"}>
          {product.delivery}
        </span>
        {isAvailable && (
          <button
            className="af-cart"
            type="button"
            onClick={() => addCartItem(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <FaShoppingCart />
          </button>
        )}
      </div>
    </article>
  );
};
export default ProductRow;
