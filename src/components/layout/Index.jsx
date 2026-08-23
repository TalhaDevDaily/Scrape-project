import Navbar from "../common/Navbar";
import SideNav from "../common/SideNav";
import { Outlet } from "react-router";
import "../../App.css";

const Layout = () => {
  return (
    <div className="af-container">
      <Navbar />
      <div className="af-layout">
        <SideNav />
        <main className="af-main page-content">
          <Outlet />
        </main>
        <aside className="af-promo" aria-label="Store information">
          <p className="promo-kicker">Account Factory</p>
          <h2>Ready stock for your next campaign.</h2>
          <p>
            Checked accounts, instant delivery, and support when you need it.
          </p>
          <a
            href="https://t.me/account_factory_com"
            target="_blank"
            rel="noreferrer"
          >
            Contact support <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </div>
  );
};

export default Layout;
