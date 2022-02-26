import { useState } from "react";

function ListProducts({ form, setForm }) {
  const handleDelete = (event) => {
    const product = event.target.parentElement.textContent;

    filterProduct(product);
  };

  const filterProduct = (product) => {
    const filteredProducts = form.filter((item) => {
      return item !== product;
    });

    setForm(filteredProducts);
  };

  return (
    <div className="product-list-container">
      <ul className="list-container">
        {form.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
            <input type="button" value="Update" />
            <input type="button" value="Delete" onClick={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListProducts;
