import ramadan from "../../assets/ramadan.jpeg";
import birds from "../../assets/birds.jpeg";
import passover from "../../assets/passover.jpeg";
import blackqueen from "../../assets/black-queen.jpeg";
import easter from "../../assets/easter.jpeg";
import TitledImageList from "../shared/ImageLists/TitledImageList";

// const itemData = [
//   {
//     img: easter,
//     title: "Easter",
//     author: "@bkristastucchio",
//     featured: true,
//   },
//   {
//     img: ramadan,
//     title: "Ramadan",
//     author: "@bkristastucchio",
//     featured: true,
//   },
//   {
//     img: blackqueen,
//     title: "Blackqueen",
//     author: "@bkristastucchio",
//     featured: true,
//   },
//   {
//     img: birds,
//     title: "Birds",
//     author: "@bkristastucchio",
//     featured: true,
//   },
//   {
//     img: passover,
//     title: "Passover",
//     author: "@bkristastucchio",
//     featured: true,
//   },
// ];

const RecommendedCategory = () => {
  return (
    <div className="recommended">
      <div className="centered-text">
        <h3>Recommended Categories to stay inspired</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="recommended-gallery flex-container">
        <div className="wide-pic-category">
          <TitledImageList
            imgPath={ramadan}
            imgHeight="500px"
            imgWidth="627px"
            imageClass="left-radius"
            imgTitle="Ramadan"
            titleClass="title-overlay--wide-pic-border"
          />
        </div>
        <div className="small-pic-category">
          <div className="small-rec-columns">
            <div>
              <TitledImageList
                imgPath={birds}
                imgHeight="240px"
                imgWidth="313.5px"
                imgTitle="Birds"
              />
            </div>
            <div>
              <TitledImageList
                imgPath={passover}
                imgHeight="240px"
                imgWidth="313.5px"
                imageClass="small-rec-last-top-col"
                imgTitle="Passover"
              />
            </div>
          </div>
          <div className="small-rec-columns">
            <div>
              <TitledImageList
                imgPath={blackqueen}
                imgHeight="240px"
                imgWidth="313.5px"
                imgTitle="Black queen"
              />
            </div>
            <div>
              <TitledImageList
                imgPath={easter}
                imgHeight="240px"
                imgWidth="313.5px"
                imageClass="small-rec-last-bottom-col"
                imgTitle="Easter"
                titleClass="title-overlay--small-last-pic-border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCategory;
