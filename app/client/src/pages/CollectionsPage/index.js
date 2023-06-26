// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CollectionsSection from "../../components/HomeComponents/collectionsSection";
import AlternativeLayout from "../../components/shared/Layouts/AlternativeLayout";
import DynamicSearch from "../../components/shared/Searchbox/dynamicSearchbox";
import { illustrationsCollections } from "../../data/illustrations";
import { mockupCollections } from "../../data/mockupCollections";
import { trendyCollections } from "../../data/trendyCollections";
import { vectorCollections } from "../../data/vectorCollections";

const illustrations = "illustration";
const vectors = "vector";
const premiums = "premium";
const photos = "photo";
const PSDs = "PSD";

const CollectionsPage = () => {
  const navigate = useNavigate();

  //   const changeBgImage = () => {
  //     setInterval(() => {
  //       document.getElementById("collections-banner").style.backgroundImage =
  //         'url("../../assets/img-collection2.png")';
  //     }, 2000);
  //   };

  //   useEffect(() => {
  //     changeBgImage();

  //     return () => {
  //       changeBgImage();
  //     };
  //   }, []);

  return (
    <AlternativeLayout>
      <div className="collectionsPage">
        <div id="collections-banner">
          <div>
            <div className="centered-text">
              <h2>Collections</h2>
              <p>Explore trending asset collections curated by experts</p>
            </div>
            <DynamicSearch extraClass="collection-search" />
          </div>
        </div>

        <div className="collections-gallery">
          <CollectionsSection
            headerText="Illustration collections created by professionals"
            collData={illustrationsCollections}
            // name="illustration"
            onClick={() => {
              navigate(`/${illustrations}-collections`);
            }}
          />
          <CollectionsSection
            headerText="Exclusive Premium Collections"
            collData={trendyCollections}
            onClick={() => {
              navigate(`/${premiums}-collections`);
            }}
          />
          <CollectionsSection
            headerText="Discover the best vector art collections"
            collData={vectorCollections}
            onClick={() => {
              navigate(`/${vectors}-collections`);
            }}
          />
          <CollectionsSection
            headerText="Explore collections of stunning photos"
            collData={trendyCollections}
            onClick={() => {
              navigate(`/${photos}-collections`);
            }}
          />
          <CollectionsSection
            headerText="Browse curated mockups and PSD templates"
            collData={mockupCollections}
            onClick={() => {
              navigate(`/${PSDs}-collections`);
            }}
          />
        </div>
      </div>
    </AlternativeLayout>
  );
};

export default CollectionsPage;
