import DefaultLayout from "../../components/shared/Defaultlayout";
import imag from "../../assets/headdsss 1.png";
import webtemp from "../../assets/60c50190b31e54b5bb237aeece95bece-removebg-preview 1.png";
import boy from "../../assets/realistic_photo_of_a_happy_african_todler.png";
import oldwoman from "../../assets/Realistic_photo_of_an_african_creative.jpg";
import man from "../../assets/peacemaker_an_african_man_thinking_in_a_rail_station.png";
import BannerCategoryLinks from "../../components/shared/bannerCategoryLinks";
import mockup from "../../assets/visualhunter-70349147e8-removebg-preview 1.png";

const categoryArr = [
  {
    id: 1,
    name: "Web templates",
    image: webtemp,
  },
  {
    id: 2,
    name: "Art collections",
    image: boy,
  },
  {
    id: 3,
    name: "Graphic templates",
    image: oldwoman,
  },
  {
    id: 4,
    name: "Mockups",
    image: mockup,
  },
  {
    id: 5,
    name: "Aftereffect templates",
    image: man,
  },
];

const Homepage = () => {
  return (
    <DefaultLayout>
      <div className="homepage">
        <div className="banner">
          <div className="banner-flex-1">
            <div className="banner-text">
              <h3>
                <span className="light-text">Explore</span>
                <br />
                <span className="big-100">100,000+ </span>
                <br />
                <span className="logo-text">creative resources</span>
                <br />
                <span className="italic-text light-text">
                  specially designed for you
                </span>
              </h3>
            </div>
            <div className="banner-img">
              <img src={imag} alt="" width="300px" />
            </div>
          </div>
          <h4 className="centered-text italic-text light-text">
            Are you an African creator? We have what you are looking for.
          </h4>
          <div className="banner-flex-2">
            {categoryArr.map((val) => {
              return (
                <BannerCategoryLinks
                  key={val.id}
                  image={val.image}
                  name={val.name}
                />
              );
            })}
          </div>
        </div>

        <div className="category-boxes">
        <h4 className="centered-text italic-text light-text">
            Everything...Everywhere...Everyone!!!
          </h4>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Homepage;
