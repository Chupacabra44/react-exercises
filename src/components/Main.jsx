import List from "./List";
import Form from "./Form";
import { useState } from "react";

const Main = ({ items, handleAddItems, handleDeleteItem, handleDoneItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div>
      <Form handleAddItems={handleAddItems} />

      {items.length === 0 ? (
        <p style={{ textAlign: "center" }}>Shopping list is empty!</p>
      ) : (
        <>
          <ul className="mainWrapper">
            {sortedItems.map((item) => (
              <List
                key={item.id}
                item={item}
                onDelete={handleDeleteItem}
                handleDoneItem={handleDoneItem}
              />
            ))}
          </ul>
          <div>
            <select
              className="select"
              defaultValue={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="input">Sort By Input</option>
              <option value="packed">Sort By Packed</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
