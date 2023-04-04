import CategoryHeader from "../Header/categoryHeader";
import Sidebar from "./Sidebar";

const SidebarLayout = ({children}) => {
  return (
    <div id="wrapper">
      <CategoryHeader />

      <div id="sidebar">
        <Sidebar />
      </div>

      <div id="main">{children}</div>
    </div>
  );
};

export default SidebarLayout;
