import * as React from "react";
import { BsSearch } from "react-icons/bs";

const MainSearch = () => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search here..."
        className="search-input"
      />
      <BsSearch style={{marginLeft:"-27px", cursor:"pointer"}} />
    </div>
  );
};

export default MainSearch;
