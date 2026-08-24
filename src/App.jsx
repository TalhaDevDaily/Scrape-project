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
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="category/:categorySlug" element={<CategoryPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
