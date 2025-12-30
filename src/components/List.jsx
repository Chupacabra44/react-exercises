const List = ({ item, onDelete }) => {
  const { product, quentity, packed, id } = item;

  return (
    <li className="listWrapper">
      <span>{quentity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>
      <div>
        <button className="doneBtn">Done</button>

        <button onClick={() => onDelete(id)} className="deleteBtn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default List;
