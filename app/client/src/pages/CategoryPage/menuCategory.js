import { useMatch } from "react-router-dom";
import SideBarLayout from "../../components/shared/Layouts/SidebarLayout";

const MenuCategory = () => {
  const match = useMatch("/:name");
  const cName = match ? match.params.name : "";

  return (
    <SideBarLayout>
      <div className="category-page">
        <div className="centered-text category-page-head">
          <h3>{`Discover the most popular free ${cName}`} </h3>
        </div>
      </div>
    </SideBarLayout>
  );
};

export default MenuCategory;
