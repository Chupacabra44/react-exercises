import List from "./List";
import Form from "./Form";

const Main = ({ items, handleAddItems }) => {
  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul className="mainWrapper">
        {items.map((item) => (
          <List key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
