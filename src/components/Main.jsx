import shoppingList from "../data/data";
import List from "./List";
import Form from "./Form";

const Main = () => {
  return (
    <div>
      <Form />
      <ul className="mainWrapper">
        {shoppingList.map((item) => (
          <List key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
