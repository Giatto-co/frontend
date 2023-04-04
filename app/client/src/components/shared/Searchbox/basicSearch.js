import { BsSearch } from "react-icons/bs";

const BasicSearch = ({ searchTitle }) => {
  return (
    <span className="basic-search cursor-pointer transparent-bg">
      <BsSearch />
      {searchTitle}
    </span>
  );
};

export default BasicSearch;
