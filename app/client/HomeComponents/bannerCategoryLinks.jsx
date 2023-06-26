import { useNavigate } from "react-router-dom";

const BannerCategoryLinks = ({ image, name }) => {
  const navigate = useNavigate();

  const goToCategoryPage = () => {
    navigate(`/category/${name.toLowerCase()}`);
  };

  return (
    <div className="cursor-pointer category-items">
      <div className="category-container" onClick={goToCategoryPage}>
        {/* <img
          src={"https://038b-102-89-23-184.ngrok.io/" + image}
          alt=""
          width="120px"
          height="120px"
          className="bordered-image"
        /> */}
         <img
          src={image}
          alt=""
          width="100px"
          height="100px"
          className="bordered-image"
        />
      </div>
      <p className="category-text">{name}</p>
    </div>
  );
};

export default BannerCategoryLinks;
