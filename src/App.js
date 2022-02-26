import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ListProducts from "./components/ListProducts";

function App() {
  const [form, setForm] = useState([]);

  return (
    <>
      <AddProduct form={form} setForm={setForm} />
      <ListProducts form={form} />
    </>
  );
}

export default App;
