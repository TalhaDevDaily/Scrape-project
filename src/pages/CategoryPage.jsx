import { Link, useParams } from "react-router";
import { FaBell, FaHeart, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { getCategory, getProducts } from "./categoryData";
import NotFound from "./NotFound";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const category = getCategory(categorySlug);

  if (!category) return <NotFound />;

  const products = getProducts(category);

  return (
    <div className="catalog-page category-page af-main-page">
      <section className="af-panel af-content category-catalog-panel">
        <nav className="af-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{category.name}</span>
        </nav>
        <header className="category-intro af-rise af-rise-3">
          <div>
            <p className="page-kicker">Collection {category.index}</p>
            <h1 className="af-h1">{category.name}</h1>
            <p className="af-lead">{category.description}</p>
          </div>
          <div className="category-stat">
            <strong>{category.count || "—"}</strong>
            <span>available items</span>
          </div>
        </header>
        <div className="af-toolbar">
          <div className="af-chips" aria-label="Product filters">
            <button className="af-chip is-active" type="button">
              Default
            </button>
            <button className="af-chip" type="button">
              Price <FaArrowUp aria-hidden="true" />
            </button>
            <button className="af-chip" type="button">
              Price <FaArrowDown aria-hidden="true" />
            </button>
            <button className="af-chip" type="button">
              <span className="af-chip__dot" />
              Newest
            </button>
          </div>
          <label className="af-chip af-stock-filter">
            <input type="checkbox" />
            <span className="af-chip__dot" />
            In stock only
          </label>
        </div>
        <div className="af-list" aria-label={`${category.name} products`}>
          {products.map((product, index) => (
            <ProductRow product={product} index={index} key={product.id} />
          ))}
        </div>
      </section>
      <CategoryDetails category={category} />
      <section className="trust-strip af-panel af-content">
        <span className="status-dot" />
        <strong>Instant delivery after payment</strong>
        <span>Every item is checked before it reaches the catalog.</span>
      </section>
    </div>
  );
};

const ProductRow = ({ product, index }) => {
  const isAvailable = !product.delivery.toLowerCase().includes("out");
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
        className="af-fav"
        type="button"
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
        {isAvailable && <span className="af-quantity">− 1 +</span>}
      </div>
    </article>
  );
};

const CategoryDetails = ({ category }) => (
  <section className="af-panel af-content af-page__body">
    <h2>What this category means</h2>
    <p>
      {category.description} Each listing is checked before it is published, and
      the product row shows the delivery state available at the moment you
      browse.
    </p>
    <p>
      The right choice depends on the job: fresh accounts suit testing, while
      older or reviewed profiles are better when campaign downtime costs more
      than the account itself.
    </p>
    <h2>What to look at when choosing</h2>
    <p>
      Pay attention to age, geo, included access, verification status and the
      stock indicator. Contents can differ from one listing to the next, so the
      individual description remains the source of truth.
    </p>
    <p>
      Use a separate browser profile and a stable connection for each account.
      This keeps your setup organized and makes the delivered details easier to
      verify.
    </p>
    <h2>What is included</h2>
    <p>
      Listings may include email access, cookies, tokens, pages, documents,
      two-factor authentication or business assets. The exact bundle is written
      on each product row.
    </p>
    <h2>How delivery works</h2>
    <p>
      Payment is followed by automatic delivery to the customer area. If an item
      is unavailable, use the bell control to request an availability
      notification.
    </p>
  </section>
);

export default CategoryPage;
