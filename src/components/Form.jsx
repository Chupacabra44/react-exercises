import { useState } from "react";

const Form = () => {
  const [product, setProduct] = useState("");
  const [quentity, setQuentity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (product) {
      const newTodo = {
        id: Date.now(),
        packeed: false,
        product: product,
        quentity: quentity,
      };
      console.log(newTodo);
      setProduct("");
      setQuentity(1);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <select
        value={quentity}
        onChange={(event) => setQuentity(Number(event.target.value))}
        className="select"
      >
        {[...Array(20)].map((_, index) => (
          <option value={index + 1} key={index}>
            {index + 1}
          </option>
        ))}
      </select>
      <input
        className="input"
        type="text"
        placeholder="Enter a name"
        value={product}
        onChange={(event) => setProduct(event.target.value)}
      />
      <button className="addBtn">Add</button>
    </form>
  );
};

export default Form;
