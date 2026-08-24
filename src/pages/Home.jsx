import { Link } from "react-router";
import { FaBell, FaHeart, FaShoppingCart } from "react-icons/fa";
import { addCartItem } from "../components/common/cartEvents";
import { categories, getProducts } from "./categoryData";

const tickerItems = [
  "Checked before sale",
  "Instant delivery",
  "Live stock",
  "10 years on the market",
  "Telegram support",
];

const liveItems = [
  ["purchased", "Facebook autoreg UA · with Fan Page", "5 hours ago"],
  ["purchased", "Facebook UA autoreg", "7 hours ago"],
  ["purchased", "Facebook farm account UA · PZRD KING", "9 hours ago"],
  ["purchased", "Mobile proxy · Ukraine", "12 hours ago"],
];

const Home = () => {
  return (
    <div className="catalog-page home-page">
      <section className="af-hero af-rise af-rise-2">
        <div>
          <p className="af-hero__kicker">Account Factory / 2026 catalog</p>
          <h1 className="af-hero__title">Quality Facebook accounts store.</h1>
          <p className="af-hero__sub">
            Checked accounts, business managers, pages and mobile proxies for
            advertising teams. Delivered right after payment.
          </p>
          <div className="af-hero__actions">
            <a className="af-btn" href="#catalog">
              Browse catalog <span aria-hidden="true">↓</span>
            </a>
            <a
              className="af-hero__link"
              href="https://t.me/account_factory_com"
              target="_blank"
              rel="noreferrer"
            >
              Talk to support <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span className="status-dot" />
          <strong>10 years</strong>
          <span>Quality accounts store</span>
        </div>
      </section>

      <div className="af-ticker" aria-label="Store highlights">
        <div className="af-ticker__track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span className="af-ticker__item" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section
        className="af-panel af-content home-catalog-panel af-rise af-rise-3"
        id="catalog"
      >
        <div className="af-sechead">
          <div>
            <p className="af-sechead__k">Browse by need</p>
            <h2 className="af-h1">All categories</h2>
          </div>
          <p className="af-lead">
            Choose the structure that fits your next campaign.
          </p>
        </div>
        <div className="af-catgroup">
          <div className="af-catgroup__head">
            <span className="af-catgroup__title">
              Catalog collections{" "}
              <span className="af-catgroup__count">{categories.length}</span>
            </span>
            <span className="af-catgroup__all">
              Live stock <span>↗</span>
            </span>
          </div>
          <div className="af-grid af-grid--cats">
            {categories.map((category) => (
              <Link
                className="af-cattile"
                to={`/category/${category.slug}`}
                key={category.slug}
              >
                <span className="af-cattile__name">{category.name}</span>
                <span className="af-cattile__arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="af-live" aria-label="Recent purchases">
        <div className="af-live__track">
          {[...liveItems, ...liveItems].map(
            ([status, product, time], index) => (
              <span className="af-live__item" key={`${product}-${index}`}>
                <i aria-hidden="true" /> <b>{status}</b>{" "}
                <strong>{product}</strong> <em>{time}</em>
              </span>
            ),
          )}
        </div>
      </div>

      <section
        className="af-homegrid af-rise af-rise-3"
        aria-label="Partner services"
      >
        <a
          className="af-homegrid__item af-homegrid__item--full af-homegrid__item--mailcraft"
          href="https://mailcraft.org/"
          target="_blank"
          rel="noreferrer"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Mailcraft service banner"
          >
            <source
              src="https://account-factory.com/storage/banners/01KYCMRP9BDPQ2S98MV1GGGTNF.mp4"
              type="video/mp4"
            />
          </video>
        </a>
        <a
          className="af-homegrid__item af-homegrid__item--full af-homegrid__item--keyproxy"
          href="https://keyproxy.net/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://account-factory.com/storage/banners/01KYHYV3NH7WZTE9NXMQZZ3T5F.gif"
            alt="Keyproxy mobile proxy service banner"
            loading="lazy"
          />
        </a>
      </section>

      <section className="af-panel af-content home-products-panel af-rise af-rise-3">
        <div className="af-sechead">
          <div>
            <p className="af-sechead__k">Showcase</p>
            <h2 className="af-h1">All products</h2>
          </div>
          <p className="af-lead">Instant delivery right after payment.</p>
        </div>
        <div className="af-catgroup home-product-group">
          <div className="af-catgroup__head">
            <Link className="af-catgroup__title" to="/category/zrd-accounts">
              Accounts with passed ZRD{" "}
              <span className="af-catgroup__count">17</span>
            </Link>
            <Link className="af-catgroup__all" to="/category/zrd-accounts">
              Open category <span>→</span>
            </Link>
          </div>
          <div className="af-list home-product-list">
            {getProducts(categories[0]).map((product, index) => (
              <HomeProductRow
                product={product}
                index={index}
                key={product.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="af-panel af-content home-info-panel af-page__body af-rise af-rise-3">
        <div className="af-sechead">
          <div>
            <p className="af-sechead__k">Built for media buyers</p>
            <h2 className="af-h1">
              Facebook accounts for advertising and media buying
            </h2>
          </div>
          <p className="af-lead">
            Ready stock gives you back the time that used to go into farming.
          </p>
        </div>
        <h3>What we sell</h3>
        <p>
          Different jobs need different accounts. Auto-registered accounts suit
          testing, farmed profiles carry activity history, and accounts with
          passed ad review help when every day of campaign downtime matters.
        </p>
        <h3>Why people buy from us</h3>
        <p>
          Live stock, checked items, instant delivery and support that
          understands the product. The exact contents and replacement terms are
          written on each listing.
        </p>
        <h3>How buying works</h3>
        <p>
          No registration is needed before checkout. After payment, the details
          appear in your account area and are also sent to your email.
        </p>
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
      <section className="trust-strip home-trust af-panel af-content">
        <span className="status-dot" />
        <strong>Instant delivery after payment</strong>
        <span>We check every item before it reaches the catalog.</span>
      </section>
    </div>
  );
};

const HomeProductRow = ({ product, index }) => {
  const isAvailable = !product.delivery.toLowerCase().includes("out");
  return (
    <article
      className="af-prod home-product-row"
      data-reveal="true"
      style={{ "--d": `${index * 0.05}s` }}
    >
      <Link className="af-prod__main" to={`/product/${product.id}`}>
        <div className="af-prod__emblem" aria-hidden="true">
          <span>AF</span>
        </div>
        <div className="af-prod__info">
          <strong className="af-prod__name">{product.name}</strong>
          <span className="af-prod__desc">{product.description}</span>
        </div>
      </Link>
      <button
        className="af-fav"
        type="button"
        aria-label={`Favorite ${product.name}`}
      >
        <FaHeart />
      </button>
      <div className="af-prod__side">
        <strong className="af-price">${product.price}</strong>
        <span
          className={`af-badge ${isAvailable ? "af-badge--stock" : "af-badge--out"}`}
        >
          {isAvailable ? product.delivery : "out"}
        </span>
        <button
          className="af-bell"
          type="button"
          aria-label={isAvailable ? "Product alerts" : "Notify when available"}
        >
          <FaBell />
        </button>
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

export default Home;
