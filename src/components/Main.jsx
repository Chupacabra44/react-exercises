import List from "./List";
import Form from "./Form";

const Main = ({ items, handleAddItems, handleDeleteItem }) => {
  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul className="mainWrapper">
        {items.map((item) => (
          <List key={item.id} item={item} onDelete={handleDeleteItem} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
