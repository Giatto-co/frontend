import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useLogout } from "../../../hooks/useLogout";
import { BsStarFill } from "react-icons/bs";
import HamburgerMenu from "./hamburgerMenu";
import { useState } from "react";

const Navbar = () => {
  // const { logout } = useLogout();
  // const { user } = useAuthContext();
  const [openHamburger, setOpenHamburger] = useState(false);

  // const handleClick = () => {
  //   logout();
  // };

  return (
    <header>
      <div className="container">
        <div className="full-nav">
          <Link to="/">
            <h1 className="white sub-head-text">giatto</h1>
          </Link>
          <nav>
            {/* {user && (
            <div>
              <span>Hi {user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && ( */}
            {/* <div className="nav-links"> */}
            <div className="links">
              <Link to="#">New Collections</Link>
              <Link to="#">Categories</Link>
              <Link to="#">Become a creator</Link>
            </div>

            {/* </div> */}
            {/* )} */}
          </nav>
          <nav>
            <div className="links">
              <Link to="/login">Login</Link>
              <Link className="signup-btn" to="/signup">
                Signup
              </Link>
              <BsStarFill size={18} className="star-icon" />
            </div>
          </nav>
        </div>
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
              transform: openHamburger ? "translateX(0)" : "translateX(-100%)",
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
                <Link to="/login" className="mobile-nav--links login-btn--mobile">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="mobile-nav--links signup-btn--mobile">
                  Signup
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
