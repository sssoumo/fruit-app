import Input from "../Input";
import Text from "../Text";
import "./style.css";

const AddFruitForm = ({ handleAddFruit, inputValue, handleNewFruitChange }) => {
  return (
    <form onSubmit={handleAddFruit} className="addFruit">
      <Text text="New fruit" />:
      <Input type="text" value={inputValue} onChange={handleNewFruitChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddFruitForm;
