import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  return (
    <div className="appWrapper">
      <Header />
      <Main items={items} handleAddItems={handleAddItems} />
      <Footer />
    </div>
  );
};

export default App;
