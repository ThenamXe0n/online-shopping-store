import { Route, Routes } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import Protected from "./routes/Protected";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import MyOrdersPage from "./pages/OrderPage";
import NavBar from "./components/cards/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<MyOrdersPage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <Protected>
              <CheckoutPage />
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

export default App;
