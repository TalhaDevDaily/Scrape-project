import logo from "../../assets/Image/PlaceHolderLogo.png";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaFlagCheckered } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="site-navbar af-head__deck flex justify-between items-center">
      <div className="left-div flex gap-1 border">
        <div className="logo-div border">
          <div className="w-[50px] h-[50px]">
            <img
              src={logo}
              className="brand-logo w-full"
              alt="Man, it's just a placeholder logo"
            />
          </div>
          <div>
            <h3>
              Place<span className="text-purple-500 font-bold">Holder</span>
            </h3>
            <p>Anything you can place here</p>
          </div>
        </div>

        <menu className="menu-bar border flex items-center">
          <ul className="flex items-center gap-2">
            <li>Blog</li>
            <li>Shop Rules</li>
            <li>Checker</li>
            <li>2FA</li>
          </ul>
        </menu>
      </div>
      <div className="buttons-right-div flex  items-center gap-3">
        <button className=" bg-transparent border-none cursor-pointer font-inherit border-0 flex items-center rounded-[15px] no-underline transition-colors duration-300 ease-in-out p-1.25">
          <CiSearch className="relative grid w-[42px] h-[42px] flex-none place-items-center rounded-xl border border-(--af-line) bg-white/10 text-white antialiased transition-[border-color,background] duration-300" />
        </button>{" "}
        <button className=" bg-transparent border-none cursor-pointer font-inherit border-0 flex items-center rounded-[15px] no-underline transition-colors duration-300 ease-in-out p-1.25">
          <CiHeart className="relative grid w-[42px] h-[42px] flex-none place-items-center rounded-xl border border-(--af-line) bg-white/10 text-white antialiased transition-[border-color,background] duration-300" />
        </button>{" "}
        <button className=" bg-transparent border-none cursor-pointer font-inherit border-0 flex items-center rounded-[15px] no-underline transition-colors duration-300 ease-in-out p-1.25">
          <CiShoppingCart className="relative grid w-[42px] h-[42px] flex-none place-items-center rounded-xl border border-(--af-line) bg-white/10 text-white antialiased transition-[border-color,background] duration-300" />
        </button>
        <button className=" bg-transparent border-none cursor-pointer font-inherit border-0 flex items-center rounded-[15px] no-underline transition-colors duration-300 ease-in-out p-1.25">
          <FaFlagCheckered className="relative grid w-[42px] h-[42px] flex-none place-items-center rounded-xl border border-(--af-line) bg-white/10 text-white antialiased transition-[border-color,background] duration-300" />
        </button>
        <div className="h-6 border-r-2"></div>
        {/* Button UI Verse */}
        <button className="relative cursor-pointer py-4 px-8 text-center font-barlow inline-flex justify-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-white focus:outline-offset-4 overflow-hidden">
          <span className="relative z-20">Touch me</span>

          <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"></span>

          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"></span>
          <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
