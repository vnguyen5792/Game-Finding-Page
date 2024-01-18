import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisibility] = useState(false);

  //this is a simple function that will print the item to the console
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleOnClick = () => {
    setAlertVisibility(true);
  };

  return (
    <div className="container">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          hello <span>world</span>
        </Alert>
      )}

      <Button onCLick={handleOnClick}>Click on me!</Button>
    </div>
  );
}

export default App;
