import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ShopPage from "./pages/shopPage/ShopPage";
import DetailPage from "./pages/detailpage/DetailPage";
import ProductPage from "./pages/productpage/ProductPage";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/cartpage/CartPage";
import CartProvider from "./components/cartContext/CartContext";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/detail/:category" element={<DetailPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={"NOT Found"} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
