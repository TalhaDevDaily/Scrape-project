import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";
import {
  FAVORITES_UPDATED_EVENT,
  readStoredFavorites,
  toggleFavoriteItem,
} from "../../components/common/favoritesEvents";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Favourites = () => {
  const [items, setItems] = useState(readStoredFavorites);

  useEffect(() => {
    const sync = () => setItems(readStoredFavorites());
    window.addEventListener(FAVORITES_UPDATED_EVENT, sync);
    return () => window.removeEventListener(FAVORITES_UPDATED_EVENT, sync);
  }, []);

  return (
    <div className="blog-index">
      <section className="af-panel af-content home-info-panel af-page__body af-rise af-rise-3">
        <h1 className="text-4xl! font-bold!">Favourites</h1>

        {items.length === 0 ? (
          <div
            className="af-cart-empty"
            style={{ minHeight: "220px", paddingTop: "32px" }}
          >
            <div className="af-cart-empty__icon">
              <span aria-hidden="true">♥</span>
            </div>
            <h3>No favourites yet</h3>
            <p>Tap the heart on any product to save it here.</p>
            <Link to="/" className="af-btn af-btn--cart">
              Browse catalog
            </Link>
          </div>
        ) : (
          <div className="blog-list" aria-label="Saved favourites">
            {items.map((item) => (
              <article className="blog-card" key={item.slug || item.id}>
                <Link to={`/favourites/${item.slug || item.id}`}>
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <h2>{item.name}</h2>
                      <span className="text-[#f5af35] font-bold">
                        {currency.format(Number(item.price))}
                      </span>
                    </div>
                    <p>{item.description || "Saved from the catalog."}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#8f929b]">
                      {item.badge && (
                        <span className="rounded-full border border-white/10 px-2 py-1">
                          {item.badge}
                        </span>
                      )}
                      {item.delivery && (
                        <span className="rounded-full border border-white/10 px-2 py-1">
                          {item.delivery}
                        </span>
                      )}
                    </div>
                    <time>{item.delivery || "Live item"}</time>
                  </div>
                  <span className="blog-card__arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
                <button
                  type="button"
                  className="favorite-card-heart is-active"
                  aria-label={`Remove ${item.name} from favourites`}
                  onClick={() => toggleFavoriteItem(item)}
                >
                  <FaHeart aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>
        )}

        <div className="home-faq">
          <strong>Questions?</strong>
          <a
            href="https://t.me/account_factory_com"
            target="_blank"
            rel="noreferrer"
          >
            Message support <span>↗</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Favourites;
