import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./components/Checkout/Checkout";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Success from "./components/Success/Success";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<div>Shop</div>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
