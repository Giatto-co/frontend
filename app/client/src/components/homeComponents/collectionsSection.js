import MasonryImageList from "../shared/ImageLists/masonryImageList";
import { BsArrowRight } from "react-icons/bs";

const CollectionsSection = ({ headerText, paraText, collData, onClick }) => {

  return (
    <div className="trendy-section">
      <div>
        <div className="centered-text">
          <h3>{headerText}</h3>
          <p>{paraText}</p>
        </div>

        <div className="explore-collections-btn">
          <span>Explore</span>{" "}
          <BsArrowRight
            className="explore-arrow cursor-pointer"
            size={20}
            onClick={onClick}
          />
        </div>

        <div className="trendy-gallery cursor-pointer">
          <MasonryImageList collData={collData} />
        </div>
      </div>
    </div>
  );
};

export default CollectionsSection;
