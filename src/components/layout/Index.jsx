import Navbar from "../common/Navbar";
import SideNav from "../common/SideNav";
import { Outlet } from "react-router";
import "../../App.css";
import {
  FaApple,
  FaBolt,
  FaCommentAlt,
  FaCreditCard,
  FaGoogle,
  FaShoppingCart,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Layout = () => {
  return (
    <div className="af-container relative">
      <div className="af-navbar-shell">
        <Navbar />
      </div>
      <div className="af-layout pt-16">
        <SideNav />
        <main className="af-main page-content">
          <Outlet />
        </main>
        <aside className="af-rail" aria-label="Store information">
          <section className="af-promo">
            <h2 className="af-promo__title">Our Telegram</h2>
            <p className="af-promo__text">
              Drops, deals and fast support in one click.
            </p>
            <a
              className="af-promo__cta"
              href="https://t.me/Gk0qnr1fo6diNzAy"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane aria-hidden="true" /> Join
            </a>
          </section>
          <section className="af-panel af-benefits" aria-label="Store benefits">
            <Benefit icon={<FaBolt />} title="Instant delivery">
              Items land in your account right after payment.
            </Benefit>
            <Benefit
              icon={<FaCreditCard />}
              title="Card, Apple Pay, Google Pay"
            >
              Monobank acquiring and crypto (USDT TRC-20, TRX).
            </Benefit>
            <div className="payment-badges" aria-label="Payment methods">
              <span>
                <FaApple />
              </span>
              <span>
                <FaGoogle />
              </span>
              <span>₮</span>
              <span>TR</span>
            </div>
            <Benefit
              icon={<FaCommentAlt />}
              title="Offline now · 9:00–20:00"
              status
            >
              Daily 9:00–20:00 (Kyiv time) on Telegram:{" "}
              <a href="https://t.me/account_factory_com">
                @account_factory_com
              </a>
            </Benefit>
          </section>
        </aside>
      </div>
      <div className="af-floating-actions" aria-label="Quick actions">
        <a
          className="af-float af-float--telegram"
          href="https://t.me/account_factory_com"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Telegram"
        >
          <FaTelegramPlane />
        </a>
        <a
          className="af-float af-float--cart"
          href="/cart"
          aria-label="Open cart"
        >
          <FiShoppingCart />
        </a>
      </div>
    </div>
  );
};

const Benefit = ({ icon, title, status = false, children }) => (
  <div className="af-benefit">
    <span className="af-benefit__icon">{icon}</span>
    <div>
      <h3>
        {status && <i className="af-offline-dot" />}
        {title}
      </h3>
      <p>{children}</p>
    </div>
  </div>
);

export default Layout;
