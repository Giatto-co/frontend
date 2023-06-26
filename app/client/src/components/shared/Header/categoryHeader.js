import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import DynamicSearch from "../Searchbox/dynamicSearchbox";
import CategoryNavbar from "./categoryNavbar";

const CategoryHeader = () => {
  const { user } = useAuthContext();

  return (
    <>
      <div className="category-header--dark">
        <div className="category-navbar flex-container">
          <CategoryNavbar />
          <ul>
            <li>
              <Link to="/content" activeclassname="active">
                Sell content
              </Link>
            </li>
            <li className="category--pricing">
              <Link to="/pricing" activeclassname="active">
                Pricing
              </Link>
            </li>
            <li className="category--login">
              <Link to="/login" activeclassname="active">
                Login
              </Link>
            </li>
            <li className="category--signup">
              <Link to="/signup" activeclassname="active">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="category-header--white flex-container">
        <Link to="/">
          <h1 className="sub-head-text">giatto</h1>
        </Link>
        <DynamicSearch extraClass="category-search" />
        {user && (
          <span className="giatto-user">
            {user.user.username.split(" ")[0][0].toUpperCase()}
            {user.user.username.split(" ")[1][0].toUpperCase()}
          </span>
        )}
      </div>
    </>
  );
};

export default CategoryHeader;
