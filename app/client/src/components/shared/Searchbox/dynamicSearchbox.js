import MultipleSelectPlaceholder from "../Dropdown/multipleSelect";

const DynamicSearch = ({
  extraClass,
}) => {
  return (
    <div className={`${extraClass} dynamic-search`}>
      <div className="flex-container search-container">
        <MultipleSelectPlaceholder />
      </div>
    </div>
  );
};

export default DynamicSearch;
