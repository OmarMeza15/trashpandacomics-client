import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Dropdown } from "flowbite-react";

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
        <Link to="/shop">
          <button>Shop</button>
        </Link>
        <Link to="/faq">
          <button>FAQ</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        <Link to="/availability">
          <button>Availability</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/reviews">
          <button>Reviews</button>
        </Link>
      </div>

      {isLoggedIn && (
        <div className="user">

          {/* Dropdown button for Profile and Logout */}
          <Dropdown label={user && user.name} dismissOnClick={false} color="light" pill={true}>

            {/* Profile */}
            <Dropdown.Item>
              <Link to="/profile">
                <p>Profile</p>
              </Link>

              <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
            </Dropdown.Item>

            <Dropdown.Divider />

            {/* Logout */}
            <Dropdown.Item>
              <button onClick={logOutUser}>Logout</button>

              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
            </Dropdown.Item>
          </Dropdown>

        </div>
      )}

      {!isLoggedIn && (
        <div className="logSignButtons grid grid-cols-2 gap-x-2">

          {/* Signup button */}
          <Link to="/signup">
            {" "}
            <button
              className="bg-white border border-white text-black w-24 h-11 rounded-3xl font-light hover:bg-black hover:text-white transition ease-in-out duration-500"
              >
              Sign Up
            </button>{" "}
          </Link>

          {/* Login Button */}
          <Link to="/login">
            {" "}
            <button
              className="bg-black border border-white text-white w-24 h-11 rounded-3xl font-light hover:bg-white hover:text-black transition ease-in-out duration-500"
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