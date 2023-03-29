import Fruit from "components/Fruit";

const FruitList = ({ fruits, removeFruit }) => {
  return (
    <div className="fruits">
      {fruits.map((fruit, index) => (
        <Fruit key={index} name={fruit} handleRemoveFruit={removeFruit} />
      ))}
    </div>
  );
};

export default FruitList;
