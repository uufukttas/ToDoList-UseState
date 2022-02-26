function ListProducts({ form }) {
  return (
    <div className="product-list-container">
      <ul className="list-container">
        {form.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListProducts;
