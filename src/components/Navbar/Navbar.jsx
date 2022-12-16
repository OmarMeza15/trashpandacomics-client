import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Dropdown } from "flowbite-react";
import SlideOver from "../Slideover";

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
        <div className="user flex items-center justify-center gap-x-10">

          {/* Dropdown button for add a new product and Logout */}
          <Dropdown label={user && user.name} dismissOnClick={false} color="light" pill={true}>

            {/* Profile */}
            {/* <Link to="/profile">
              <Dropdown.Item>
                <p>Profile</p>

                <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
              </Dropdown.Item>
            </Link> */}

            {/* Create a new product */}
            {user.roles === "Admin" && (
              <Link to="/new-product">
                <Dropdown.Item>
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path></svg>

                  <p>Add product</p>
                </Dropdown.Item>
              </Link>
            )}

            <Dropdown.Item>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>

              <p>{user.roles}</p>
            </Dropdown.Item>

            <Dropdown.Divider />

            {/* Logout */}
            <Dropdown.Item onClick={logOutUser}>
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
              
              <p>Logout</p>
            </Dropdown.Item>

          </Dropdown>

          <SlideOver />

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