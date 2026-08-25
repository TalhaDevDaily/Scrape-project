import { Link, useParams } from "react-router";
import { readStoredFavorites } from "../../components/common/favoritesEvents";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const FavouritesDetail = () => {
  const { slug } = useParams();
  const item = readStoredFavorites().find(
    (entry) => (entry.slug || entry.id) === slug,
  );

  if (!item) {
    return (
      <section className="af-panel af-content blog-detail af-rise af-rise-3">
        <p className="page-kicker">404 / Favourite not found</p>
        <h1>This saved item is not available.</h1>
        <Link className="blog-back" to="/favourites">
          Back to favourites <span>↗</span>
        </Link>
      </section>
    );
  }

  return (
    <article className="af-panel af-content blog-detail af-rise af-rise-3">
      <nav className="af-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Catalog</Link>
        <span>/</span>
        <Link to="/favourites">Favourites</Link>
        <span>/</span>
        <span>{item.name}</span>
      </nav>

      <header className="blog-detail__header">
        <p className="page-kicker">Account Factory / Saved item</p>
        <h2 className="text-4xl font-bold">{item.name}</h2>
        <div className="blog-detail__meta flex my-4 gap-2">
          <span className="text-[#8f929b] text-sm">
            {item.badge || "Saved product"}
          </span>
          <span className="text-[#8f929b] text-sm">·</span>
          <span className="text-[#8f929b] text-sm">
            {item.delivery || "Ready to deliver"}
          </span>
        </div>
        <p className="blog-detail__lead text-[#8f929b]">
          {item.description || "This item was saved from the catalog."}
        </p>
      </header>

      <div className="blog-detail__body mt-4">
        <section className="blog-section">
          <h2 className="text-3xl font-semibold my-4">Product details</h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-3">
              <strong className="text-3xl font-bold text-[#f5af35]">
                {currency.format(Number(item.price))}
              </strong>
              <span className="rounded-full border border-[#f5af35]/40 bg-[#f5af35]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#f6c868]">
                {item.badge || "Saved"}
              </span>
            </div>
            <p className="mt-4 text-[#dfe3df]">
              {item.description || "Saved from the catalog."}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#c7cbd1]">
              <li>• Delivery status: {item.delivery || "Live stock"}</li>
              <li>• Item saved in your favourites list</li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="home-faq">
        <Link className="af-btn af-btn--cart" to="/favourites">
          Back to favourites
        </Link>
        <a
          href="https://t.me/account_factory_com"
          target="_blank"
          rel="noreferrer"
        >
          Message support <span>↗</span>
        </a>
      </footer>
    </article>
  );
};

export default FavouritesDetail;
