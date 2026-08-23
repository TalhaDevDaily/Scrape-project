import logo from "../../assets/Image/PlaceHolderLogo.png";
import { Link, NavLink } from "react-router";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaLanguage } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="site-navbar af-head__deck flex justify-between items-center">
      <div className="left-div flex gap-1 border">
        <Link className="logo-div border" to="/">
          <div className="w-[50px] h-[50px]">
            <img
              src={logo}
              className="brand-logo w-full"
              alt="Man, it's just a placeholder logo"
            />
          </div>
          <div>
            <h3>
              Account <span>Factory</span>
            </h3>
            <p>Anything you can place here</p>
          </div>
        </Link>

        <menu className="menu-bar border flex items-center">
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/shoprules">Shop rules</NavLink>
            </li>
            <li>
              <NavLink to="/shoprules">Checker</NavLink>
            </li>
            <li>
              <NavLink to="/">2FA</NavLink>
            </li>
          </ul>
        </menu>
      </div>
      <div className="buttons-right-div flex  items-center gap-3">
        <form
          className="af-sfield af-sfield--bar"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <CiSearch aria-hidden="true" />
          <input aria-label="Search product" placeholder="Search product" />
        </form>
        <Link className="nav-icon-link" to="/favorites" aria-label="Favorites">
          <CiHeart />
        </Link>
        <Link className="nav-icon-link" to="/cart" aria-label="Cart">
          <CiShoppingCart />
        </Link>
        <button
          className="nav-language"
          type="button"
          aria-label="Select language"
        >
          <FaLanguage /> EN
        </button>
        <Link className="nav-signin" to="/login">
          <CiUser /> Sign in <span>↗</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
