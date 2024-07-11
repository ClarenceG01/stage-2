import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<div>Shop</div>} />
        <Route path="/checkout" element={<div>Checkout</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
