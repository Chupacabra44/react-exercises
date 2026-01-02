import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleDoneItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="appWrapper">
      <Header />
      <Main
        items={items}
        handleAddItems={handleAddItems}
        handleDeleteItem={handleDeleteItem}
        handleDoneItem={handleDoneItem}
      />
      <Footer />
    </div>
  );
};

export default App;
