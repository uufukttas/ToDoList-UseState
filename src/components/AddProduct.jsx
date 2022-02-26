import { useState } from "react";

function AddProduct({form, setForm}) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm([...form, text]);
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="product">Product</label>
        <input type="text" name="product" onChange={handleChange} />

        <input type="submit" className="btn-submit" />
      </form>
    </div>
  );
}

export default AddProduct;
