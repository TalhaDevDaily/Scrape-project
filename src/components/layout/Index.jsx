import Navbar from "../common/Navbar";
import SideNav from "../common/SideNav";
import { Outlet } from "react-router";
import "../../App.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="app-shell">
        <SideNav />
        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
