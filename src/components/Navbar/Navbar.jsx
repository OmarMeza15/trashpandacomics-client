import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="bg-black text-white flex items-center justify-between navbar">

      {/* Logo and Brand */}
      <div className="flex items-center brand">
        <Link to="/">
          <img 
            src="https://static.wixstatic.com/media/160c7a_e9cdc9d1fd634d90b3a9cead7c2cd9a0~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logowhitebg.png"
            alt=""
          />
        </Link>

        <p className="font-bold text-lg ml-4">TRASHPANDACOMIC</p>
      </div>

      {/* Middle links */}
      <div className="font-light text-sm middleNav">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/">
          <button>Shop</button>
        </Link>
        <Link to="/">
          <button>FAQ</button>
        </Link>
        <Link to="/">
          <button>Contact</button>
        </Link>
        <Link to="/">
          <button>Availability</button>
        </Link>
        <Link to="/">
          <button>About</button>
        </Link>
        <Link to="/">
          <button>Reviews</button>
        </Link>
      </div>

      {isLoggedIn && (
        <div>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button>Profile</button>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>

          <span>{user && user.name}</span>
        </div>
      )}

      {!isLoggedIn && (
        <div className="logSignButtons grid grid-cols-2 gap-x-2">

          {/* Signup and Login buttons */}
          <Link to="/signup">
            {" "}
            <button
              className="inline-block rounded-lg bg-white px-4 py-1.5 text-base font-semibold leading-7 text-black shadow-sm ring-1  ring-gray-400 hover:bg-black hover:ring-white hover:text-white"
              >
              Sign Up
            </button>{" "}
          </Link>

          <Link to="/login">
            {" "}
            <button
              className="inline-block rounded-lg bg-black px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1     ring-white hover:bg-white hover:ring-gray-400 hover:text-black"
              >
              Login
            </button>{" "}
          </Link>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
