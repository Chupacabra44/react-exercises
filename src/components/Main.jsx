import List from "./List";
import Form from "./Form";

const Main = ({ items, handleAddItems, handleDeleteItem, handleDoneItem }) => {
  return (
    <div>
      <Form handleAddItems={handleAddItems} />

      {items.length === 0 ? (
        <p style={{ textAlign: "center" }}>Shopping list is empty!</p>
      ) : (
        <ul className="mainWrapper">
          {items.map((item) => (
            <List
              key={item.id}
              item={item}
              onDelete={handleDeleteItem}
              handleDoneItem={handleDoneItem}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Main;
