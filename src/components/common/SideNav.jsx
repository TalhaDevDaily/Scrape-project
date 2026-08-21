import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";
import afLogo from "../../assets/af-logo.png";

const catalogLinks = [
  {
    label: "Accounts with passed ZRD",
    path: "/category/zrd-accounts",
    count: "17",
  },
  {
    label: "Facebook autoreg accounts",
    path: "/category/facebook-autoreg",
    count: "9",
  },
  {
    label: "FB accounts with Business Manager",
    path: "/category/fb-accounts-bm",
    count: "1",
  },
  { label: "Accounts for spam", path: "/category/spam-accounts", count: "1" },
  { label: "FB farm accounts", path: "/category/fb-farm-accounts", count: "7" },
  { label: "Premium farm", path: "/category/premium-farm", count: "" },
  {
    label: "Bundle: Farm (King) + 9 autoregs",
    path: "/category/bundle-farm-king",
    count: "1",
  },
  {
    label: "FB Business Manager",
    path: "/category/fb-business-manager",
    count: "6",
  },
  { label: "Facebook Fan Page", path: "/category/fb-fanpage", count: "2" },
  { label: "Mobile proxies", path: "/category/mobile-proxies", count: "4" },
  { label: "Position payment", path: "/category/position-payment", count: "1" },
];

const utilityLinks = [{ label: "Blog", path: "/blog" }];

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const sidebarRef = useRef(null);

  useEffect(() => {
    sidebarRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <button
        className="sidenav-mobile-toggle"
        type="button"
        aria-controls="catalog-sidebar"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="menu-icon" aria-hidden="true">
          ☰
        </span>
        <span>Browse catalog</span>
      </button>
      {isOpen && (
        <button
          className="sidenav-backdrop"
          type="button"
          aria-label="Close catalog menu"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside
        id="catalog-sidebar"
        ref={sidebarRef}
        className={`catalog-sidebar af-sidebar af-rise af-rise-2 ${isOpen ? "is-open" : ""}`}
      >
        <div className="sidebar-brand af-panel af-brand">
          <NavLink
            className="brand-lockup"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            <img
              key={pathname}
              className="brand-logo"
              src={afLogo}
              alt="Account Factory"
            />
          </NavLink>
          <button
            className="sidebar-close"
            type="button"
            aria-label="Close catalog menu"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <a
            className="af-tg"
            href="https://t.me/account_factory_com"
            target="_blank"
            rel="noreferrer"
          >
            <span aria-hidden="true">◈</span>
            <span>@account_factory_com</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <nav className="sidebar-nav" aria-label="Catalog navigation">
          <p className="sidebar-eyebrow">Categories</p>
          <div className="catalog-list af-catlist">
            {catalogLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end
                className={({ isActive }) =>
                  `catalog-link ${isActive ? "is-active" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>
          <div className="utility-list mt-4">
            {utilityLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="utility-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="utility-icon" aria-hidden="true">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </NavLink>
            ))}
          </div>
        </nav>
        {/* <div className="sidebar-support">
          <span className="support-status">
            <i /> Online support
          </span>
          <p>Need a hand choosing an account?</p>
          <a
            href="https://t.me/account_factory_com"
            target="_blank"
            rel="noreferrer"
          >
            Message us <span aria-hidden="true">↗</span>
          </a>
        </div> */}
      </aside>
    </>
  );
};

export default SideNav;
