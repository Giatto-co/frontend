import { CollapsibleBlock } from "../Footer/CollapsibleBlock";
import { MdCategory } from "react-icons/md";
import { ImKey } from "react-icons/im";
import { IoIosColorPalette } from "react-icons/io";
import { BsArrowClockwise } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="filter-box">
        <CollapsibleBlock
          header={"Category"}
          content={["Vectors", "Photos", "PSD", "Icons"]}
          collapsibleIcon={<MdCategory style={{marginRight:"0.5em"}} />}
          collapsibleExtraClass="category-collapsible"
        />
        <CollapsibleBlock
          header={"License"}
          collapsibleIcon={<ImKey style={{marginRight:"0.5em"}} />}
          content={["Free", "Premium"]}
          collapsibleExtraClass="category-collapsible"
        />
        <CollapsibleBlock
          header={"Color"}
          collapsibleIcon={<IoIosColorPalette size={20} style={{marginRight:"0.5em"}} />}
          content={["Green", "Blue", "Yellow", "Red"]}
          collapsibleExtraClass="category-collapsible"
          collapsibleLinkExtraClass="color-circles"
        />
        <CollapsibleBlock
          header={"Orientation"}
          collapsibleIcon={<BsArrowClockwise size={20} style={{marginRight:"0.5em"}} />}
          content={["Portrait", "Landscape"]}
          collapsibleExtraClass="category-collapsible"
        />
      </div>
    </div>
  );
};

export default Sidebar;
