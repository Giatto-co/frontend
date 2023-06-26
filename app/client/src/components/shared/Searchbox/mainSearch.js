import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

const MainSearch = (selectValue) => {
  const inputRef = useRef();
  // const currPlaceholder = inputRef.current.placeholder;
  const [placeholderValue, setPlaceholderValue] = useState("...");


  useEffect(() => {
    console.log("Input ref", inputRef.current.placeholder);
    console.log("Select value:", selectValue.selectValue);
    if (selectValue.selectValue.length === 0) {
      setPlaceholderValue("...");
    }
    const dynamicSelectVal = selectValue.selectValue.map(val => val);
    setPlaceholderValue(dynamicSelectVal);
  }, [selectValue]);

  return (
    <div className="search-input-container">
      <input
        type="text"
        ref={inputRef}
        name=""
        id="mainSearch"
        placeholder={`Search here for ${placeholderValue}`}
        className="search-input"
      />
      <BsSearch style={{ marginLeft: "-27px", cursor: "pointer" }} />
    </div>
  );
};

export default MainSearch;
