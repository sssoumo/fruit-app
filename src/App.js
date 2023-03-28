import { useState } from "react";
import AddFruitForm from "components/AddFruitForm";
import Button from "components/Button";
import Filter from "components/Filter";
import Fruit from "components/Fruit";

function App() {
  const [fruits, setFruits] = useState(["Banana", "Apple"]);
  const [newFruit, setNewFruit] = useState("");
  const [reverseOrder, setReverseOrder] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [addFruitFormKey, setAddFruitFormKey] = useState(0);

  // TODO: Fix adding new fruits form must work.
  const addFruit = (event) => {
    event.preventDefault();
    if (newFruit.trim() !== "") {
      //Below logic is applied to maintain a common
      //convention to apply uppercase to first letter of the fruit name
      const capitalizedNewFruit =
        newFruit.charAt(0).toUpperCase() + newFruit.slice(1);
      setFruits([...fruits, capitalizedNewFruit]);
      setNewFruit("");
      setAddFruitFormKey(addFruitFormKey + 1);
    }
  };

  // TODO: Fix 'Order' button must work.
  // NOTE: Toggling the button should reverse the order.
  const toggleOrder = () => {
    setReverseOrder(!reverseOrder);
    setFruits(
      [...fruits].sort((a, b) => {
        if (reverseOrder) {
          return b.localeCompare(a);
        } else {
          return a.localeCompare(b);
        }
      })
    );
  };

  const filterFruits = (event) => {
    setFilterValue(event.target.value);
  };

  // TODO: Add remove button to each item.
  const removeFruit = (fruitToRemove) => {
    setFruits(fruits.filter((fruit) => fruit !== fruitToRemove));
  };

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <h1>Fruits</h1>
      <Filter value={filterValue} handleFilterChange={filterFruits} />
      <br />
      <br />
      <Button text={reverseOrder ? "Reverse" : "Order"} onClick={toggleOrder} />
      <br />
      <br />
      {filteredFruits.map((fruit, index) => (
        <Fruit key={index} name={fruit} handleRemoveFruit={removeFruit} />
      ))}
      <br />
      <AddFruitForm
        key={addFruitFormKey}
        newFruit={newFruit}
        handleAddFruit={addFruit}
        handleNewFruitChange={(e) => setNewFruit(e.target.value)}
      />
    </>
  );
}

export default App;
