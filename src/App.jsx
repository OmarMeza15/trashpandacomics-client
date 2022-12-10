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

function App() {
  return (
    <div className="App">
      <NavbarComplement />

      <Routes>

        {/* Home page */}
        <Route path="/" element={<HomePage />} />

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

        {/* FAQ page */}
        <Route path="/faq" element={<FAQ />} />

        
      </Routes>
    </div>
  );
}

export default App;
