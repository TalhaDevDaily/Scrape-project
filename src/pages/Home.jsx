import { Link } from "react-router";
import { categories, featuredProducts } from "./categoryData";

const Home = () => {
  return (
    <div className="catalog-page home-page">
      <section className="catalog-hero af-rise af-rise-2">
        <div>
          <p className="page-kicker">Account Factory / 2026 catalog</p>
          <h1>Quality Facebook accounts store.</h1>
          <p className="hero-copy">
            Checked accounts, business managers, pages and mobile proxies for
            advertising teams. Delivered right after payment.
          </p>
        </div>
        <div className="hero-note">
          <span className="status-dot" />
          <strong>Live catalog</strong>
          <span>Stock changes in real time</span>
        </div>
      </section>

      <section className="catalog-section af-rise af-rise-3">
        <div className="section-heading">
          <div>
            <p className="page-kicker">Browse by need</p>
            <h2>All categories</h2>
          </div>
          <span className="section-count">{categories.length} collections</span>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              className="category-tile"
              to={`/category/${category.slug}`}
              key={category.slug}
            >
              <span className="tile-index">{category.index}</span>
              <span className="tile-label">{category.name}</span>
              <span className="tile-meta">
                {category.count || "On request"} items <b>↗</b>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="catalog-section featured-section af-rise af-rise-3">
        <div className="section-heading">
          <div>
            <p className="page-kicker">Selected stock</p>
            <h2>Popular right now</h2>
          </div>
          <span className="section-count">Instant delivery</span>
        </div>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductPreview product={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

const ProductPreview = ({ product }) => (
  <article className="product-card">
    <div className="product-image">
      <span>{product.badge}</span>
    </div>
    <div className="product-card-body">
      <p className="product-category">{product.category}</p>
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-footer">
        <strong>${product.price}</strong>
        <span>{product.delivery}</span>
      </div>
    </div>
  </article>
);

export default Home;
