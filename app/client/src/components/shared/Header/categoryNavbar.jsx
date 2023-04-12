import NavItems from "./Navitems";
import { navItems } from "./nav-item";

const CategoryNavbar = () => {
  return (
    <ul className="category--navlinks">
      {navItems.map((navmenu, index) => {
        return <NavItems items={navmenu} key={index} />;
      })}
    </ul>
  );
};

export default CategoryNavbar;
