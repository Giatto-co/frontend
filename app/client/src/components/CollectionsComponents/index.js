import { useMatch } from "react-router-dom";
import AlternativeLayout from "../shared/Layouts/AlternativeLayout";
import CollectionCard from "./collectionCard";
import { vectorCollections } from "../../data/vectorCollections";
import { mockupCollections } from "../../data/mockupCollections";
import { illustrationsCollections } from "../../data/illustrations";

const Collection = () => {
  const match = useMatch("/:name-collections");
  const name = match ? match.params.name : "";

  return (
    <AlternativeLayout>
      <div id="each-collection-banner">
        <div className="centered-text">
          <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Collections</h2>
          <p>Discover and follow the most popular {name} collections</p>
        </div>
      </div>

      <div className="each-coll-gallerry">
        <CollectionCard collData={mockupCollections} />
        <CollectionCard collData={vectorCollections} />
        <CollectionCard collData={illustrationsCollections} />
      </div>
    </AlternativeLayout>
  );
};

export default Collection;
