import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import NavbarComplement from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import ShopPage from "./pages/ShopPage";
import NewProduct from "./pages/NewProduct";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="App">
      <NavbarComplement />

      <Routes>

        {/* Profile page */}
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        {/* Signup page */}
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />

        {/* Login page */}
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Shop page */}
        <Route path='/shop' element={<ShopPage />} />

        {/* Product Details */}
        <Route path='/shop/:id/details' element={<ProductDetails />} />

        {/* Edit the product */}
        <Route path='/shop/:id/details/edit' element={<EditProduct />} />

        {/* FAQ page */}
        <Route path="/faq" element={<FAQ />} />

        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Reviews page */}
        <Route path="/reviews" element={<Reviews />} />
        
        {/* New Product page */}
        <Route path="/new-product" element={<NewProduct />} />

        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
