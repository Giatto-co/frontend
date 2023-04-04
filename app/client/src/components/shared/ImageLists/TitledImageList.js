import InfoIcon from "@mui/icons-material/Info";

const TitledImageList = ({
  imgPath,
  imgHeight,
  imgWidth,
  imageClass,
  imgTitle,
  titleClass,
}) => {
  return (
    <div className="zoom-hover">
      <img
        src={imgPath}
        alt=""
        width={imgWidth}
        height={imgHeight}
        className={imageClass}
      />
      <div className={`${titleClass} title-overlay--wide-pic flex-container`}>
        <h5>{imgTitle}</h5>
        <InfoIcon className="title-icon" />
      </div>
    </div>
  );
};

export default TitledImageList;
