import Button from "../Button";
import Text from "../Text";
import "./style.css";

const Fruit = ({ name, handleRemoveFruit }) => {
  return (
    <div className="fruit">
      <Text text={name} />
      <Button text="Remove" onClick={() => handleRemoveFruit(name)} />
    </div>
  );
};

export default Fruit;
