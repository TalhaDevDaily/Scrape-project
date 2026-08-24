import logo from "../../assets/Image/PlaceHolderLogo.png";
import { Link, NavLink } from "react-router";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdArrowRightAlt } from "react-icons/md";

const Navbar = ({ onOpenCart }) => {
  return (
    <nav className="site-navbar af-head__deck flex justify-between items-center">
      <div className="left-div flex gap-1 border">
        <Link className="logo-div border" to="/">
          <div className="w-12.5 h-12.5">
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
              <NavLink to="/checker">Checker</NavLink>
            </li>
            <li>
              <NavLink to="/checker#2fa">2FA</NavLink>
            </li>
          </ul>
        </menu>
      </div>
      <div className="buttons-right-div flex  items-center gap-3">
        <form
          className="nav-icon-link"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <CiSearch aria-hidden="true" />
          {/* <input aria-label="Search product" placeholder="Search product" /> */}
        </form>
        <Link className="nav-icon-link" to="/favorites" aria-label="Favorites">
          <CiHeart />
        </Link>
        <button
          type="button"
          className="nav-icon-link"
          onClick={onOpenCart}
          aria-label="Open cart"
        >
          <CiShoppingCart />
        </button>
        <div className="nav-icon-link">
          <button
            className="nav-icon-link"
            aria-label="Select language"
            to="/cart"
          >
            EN
          </button>
        </div>
        <Link
          className="group flex items-center rounded-4xl gap-3 text-sm p-1.75 px-3 bg-[#ffbf47] text-[#191204] transition-all duration-300 ease-out hover:-translate-y-0.75 hover:shadow-[0_4px_26px_rgba(255,191,71,0.7)]"
          to="/login"
        >
          Sign in
          <MdArrowRightAlt className="text-[#191204]! border-none! size-7.5! rounded-full! bg-[#140d022e]! transition-transform duration-300 ease-out group-hover:-rotate-45 " />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
