import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ShopRules from "./pages/ShopRules";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shoprules" element={<ShopRules />} />

            <Route path="category/:categorySlug" element={<CategoryPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
