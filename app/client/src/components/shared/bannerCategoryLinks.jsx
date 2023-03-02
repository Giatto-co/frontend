const BannerCategoryLinks = ({ image, name }) => {
  return (
    <div className="cursor-pointer category-items">
        <div className="category-container">
          <img src={image} alt="" width="120px" height="120px" className="bordered-image" />
        </div>
        <p className="category-text">{name}</p>
    </div>
  );
};

export default BannerCategoryLinks;
