import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ShopRules from "./pages/ShopRules";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Checker from "./pages/Checker";
import Favourites from "./pages/Favourites";
import FavouritesDetail from "./pages/FavouritesDetail";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shoprules" element={<ShopRules />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/checker" element={<Checker />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/favourites/:slug" element={<FavouritesDetail />} />
            <Route path="category/:categorySlug" element={<CategoryPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
