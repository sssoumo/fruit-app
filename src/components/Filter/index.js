import Input from "../Input";
import Text from "../Text";
import "./style.css";

const Filter = ({ filterValue, handleFilterChange }) => {
  return (
    <div className="filter">
      <Text text="Filter" />:
      <Input type="search" value={filterValue} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
