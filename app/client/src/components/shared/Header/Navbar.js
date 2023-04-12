import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useLogout } from "../../../hooks/useLogout";
import { BsStarFill } from "react-icons/bs";
import HamburgerMenu from "./hamburgerMenu";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  // const username = user.user.username;
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <div className="full-nav flex-container">
          <Link to="/">
            <h1 className="white sub-head-text">giatto</h1>
          </Link>
          <nav className="nav-links flex-container">
            {user && (
              <>
                <div className="links">
                  <Link to="/collections">New Collections</Link>
                  <Link to="/categories">Categories</Link>
                  <Link to="#">Become a creator</Link>
                </div>
                <div className="user-info--nav">
                  <Link to="#">Sell content</Link>
                  <Link to="#">Pricing</Link>
                  <span className="giatto-user">
                    {user.user.username.split(" ")[0][0].toUpperCase()}
                    {user.user.username.split(" ")[1][0].toUpperCase()}
                  </span>
                  <button className="btn cursor-pointer" onClick={handleClick}>
                    Log out
                  </button>
                </div>
              </>
            )}
            {!user && (
              <>
                <div className="links">
                  <Link to="/collections">New Collections</Link>
                  <Link to="/categories">Categories</Link>
                  <Link to="#">Become a creator</Link>
                </div>

                <div className="links">
                  <Link to="/login">Login</Link>
                  <Link className="btn signup-btn" to="/signup">
                    Signup
                  </Link>
                  <BsStarFill size={18} className="star-icon" />
                </div>
              </>
            )}
          </nav>
        </div>

        <>
          {/* <div className="mobile-username">
        <span className="giatto-user">{username.charAt(0).toUpperCase()}</span>
        </div> */}
          {user && (
            <div className="hamburger">
              <HamburgerMenu
                openHamburger={openHamburger}
                setOpenHamburger={setOpenHamburger}
              />
              <Link to="/">
                <h1 className="mobile-logo-text">giatto</h1>
              </Link>
              <nav
                className="mobile-nav links"
                style={{
                  transform: openHamburger
                    ? "translateX(0)"
                    : "translateX(-100%)",
                }}
              >
                <ul>
                  <li>
                    <Link to="#" className="mobile-nav--links">
                      New Collections
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mobile-nav--links">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mobile-nav--links">
                      Become a creator
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleClick}
                      className="btn mobile-nav--links signup-btn--mobile cursor-pointer"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          {!user && (
            <div className="hamburger">
              <HamburgerMenu
                openHamburger={openHamburger}
                setOpenHamburger={setOpenHamburger}
              />
              <Link to="/">
                <h1 className="mobile-logo-text">giatto</h1>
              </Link>
              <nav
                className="mobile-nav links"
                style={{
                  transform: openHamburger
                    ? "translateX(0)"
                    : "translateX(-100%)",
                }}
              >
                <ul>
                  <li>
                    <Link to="#" className="mobile-nav--links">
                      New Collections
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mobile-nav--links">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="mobile-nav--links">
                      Become a creator
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="btn mobile-nav--links login-btn--mobile"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="btn mobile-nav--links signup-btn--mobile"
                    >
                      Signup
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </>
      </div>
    </header>
  );
};

export default Navbar;
