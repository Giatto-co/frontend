import { useState } from "react";
import MultipleSelectPlaceholder from "../Dropdown/multipleSelect";
import MainSearch from "./mainSearch";

const DynamicSearch = ({
  filter = false,
  items,
  selected,
  setSelected,
  filterClss,
  placeholder = "search here...",
  camel = false,
  handleSearch,
  clearSearch,
  extraClass,
}) => {
  const [val, setVal] = useState("");
  const handleChange = (e) => {
    handleSearch(e.target.value);
    setVal(e.target.value);
  };
  const handleChangeLocal = (e) => {
    setVal(e.target.value);
  };
  const handleClear = () => {
    clearSearch();
    setVal("");
    // e.target.reset();
  };

  return (
    <div className={`${extraClass} dynamic-search`}>
      <div className="flex-container search-container">
        <MultipleSelectPlaceholder />
        <MainSearch />
      </div>
    </div>
  );
};

export default DynamicSearch;
