import MasonryImageList from "../shared/ImageLists/masonryImageList";

const CollectionCard = ({ collData }) => {
  return (
    <div className="trendy-section">
      <div>
        <div className="trendy-gallery cursor-pointer">
          <MasonryImageList collData={collData} />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
