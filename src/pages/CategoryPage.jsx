import { Link, useParams } from "react-router";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {} from "../components/common/favoritesEvents";
import { getCategory, getProducts } from "./categoryData";
import NotFound from "./NotFound";
import CategoryDetails from "../components/category/CategoryDetails";
import ProductRow from "../components/category/ProductRow";

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
        <div className="af-list " aria-label={`${category.name} products`}>
          {products.map((product, index) => (
            <ProductRow product={product} index={index} key={product.id} />
          ))}
        </div>
      </section>
      <CategoryDetails category={category} />
      <section className="trust-strip af-panel mt-2! af-content">
        <span className="status-dot" />
        <strong>Instant delivery after payment</strong>
        <span>Every item is checked before it reaches the catalog.</span>
      </section>
    </div>
  );
};

export default CategoryPage;
