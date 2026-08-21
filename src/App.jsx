import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/layout/Index";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
