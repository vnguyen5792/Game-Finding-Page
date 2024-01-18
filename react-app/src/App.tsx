import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //this is a simple function that will print the item to the console
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleOnClick = () => {
    console.log("you clicked me!");
  };

  return (
    <div className="container">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <Alert>
        hello <span>world</span>
      </Alert>

      <Button onCLick={handleOnClick}>Click on me!</Button>
    </div>
  );
}

export default App;
