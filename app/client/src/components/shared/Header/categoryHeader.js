import { Link } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";
import DynamicSearch from "../Searchbox/dynamicSearchbox";

const CategoryHeader = () => {
  const { user } = useAuthContext();

  return (
    <div className="category-header flex-container">
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
      {!user && (
        <div className="links">
          <Link to="/login/socials" className="category-login">Login</Link>
          <Link className="btn signup-btn" to="/signup/socials">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryHeader;
