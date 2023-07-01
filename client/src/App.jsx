import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from "react";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Product2 from "./pages/Product2";
import Cart2 from "./pages/Cart2";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:categories" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product2 />} />
        <Route path="/cart" element={<Cart2 />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
