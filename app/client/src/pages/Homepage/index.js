import { useEffect, useState } from "react";
import axios from "axios";
import { Slide, toast } from "react-toastify";
import DefaultLayout from "../../components/shared/Layouts/Defaultlayout";
import BannerCategoryLinks from "../../components/homeComponents/bannerCategoryLinks";
import imag from "../../assets/headdsss 1.png";
import RecommendedCategory from "../../components/homeComponents/recommendedCategory";
import TrendyCollections from "../../components/homeComponents/trendyCollections";
import PremiumSection from "../../components/homeComponents/premiumSection";
import CalendarSection from "../../components/homeComponents/calendarSection";
import CommunitySection from "../../components/homeComponents/communitySection";
import DynamicSearch from "../../components/shared/Searchbox/dynamicSearchbox";
import BasicSearch from "../../components/shared/Searchbox/basicSearch";
import { categories } from "../../data/banner-img";

const Homepage = () => {
  // const [state, setState] = useState({
  //   categories: [],
  // });
  // const { categories } = state;

  // useEffect(() => {
  //   (async () => {
  //     getCategories();
  //   })();

  //   return () => {
  //     getCategories();
  //   };
  // }, []);

  // const getCategories = async () => {
  //   var config = {
  //     method: "get",
  //     maxBodyLength: Infinity,
  //     url: "/api/v1/resources/categories",
  //     headers: {},
  //   };

  //   await axios(config)
  //     .then((res) => {
  //       const { error, data } = res.data.data;
  //       if (error === false) {
  //         console.log("Categories", data);
  //         setState((state) => ({
  //           ...state,
  //           categories: data,
  //         }));
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error(`${err.response.data.message}`, {
  //         transition: Slide,
  //         hideProgressBar: true,
  //         autoClose: 3000,
  //       });
  //     });
  // };

  return (
    <DefaultLayout>
      <div className="homepage">
        <div className="banner">
          <div className="banner-flex-1 flex-container">
            <div className="banner-text">
              <h3 className="centered-text">
                Are you an African creator? We have what you are looking for.
                {/* <span className="light-text">Explore</span>
                <br />
                <span className="big-100">100,000+ </span>
                <br />
                <span className="logo-text">creative resources</span>
                <br />
                <span className="italic-text light-text">
                  specially designed for you
                </span> */}
              </h3>
              <p className="centered-text banner-para">
                Explore <span className="big-100">100,000+ </span>creative
                resources specially designed for you
              </p>
            </div>
            {/* <div className="banner-img">
              <img src={imag} alt="" width="300px" />
            </div> */}
          </div>
          <div>
            <DynamicSearch />
          </div>
          <div className="basic-search-boxes flex-container">
            <BasicSearch searchTitle={"vectors"} />
            <BasicSearch searchTitle={"illustration"} />
            <BasicSearch searchTitle={"logo"} />
            <BasicSearch searchTitle={"photo"} />
          </div>
          <div className="banner-flex-2 flex-container">
            {categories.map((val) => {
              return (
                <BannerCategoryLinks
                  key={val.id}
                  image={val.imageURl}
                  name={val.name}
                />
              );
            })}
          </div>
        </div>

        <div className="category-boxes">
          <h4 className="centered-text italic-text light-text label-container">
            Everything...Everywhere...Everyone!!!
          </h4>
        </div>

        <RecommendedCategory />
        <TrendyCollections />
        <PremiumSection />
      </div>
      <CalendarSection />

      <div className="homepage">
        <CommunitySection />
      </div>
    </DefaultLayout>
  );
};

export default Homepage;
