import './style.css'
import { useState } from "react";
import AddProduct from "./components/AddProduct";
import ListProducts from "./components/ListProducts";

function App() {
  const [form, setForm] = useState([]);

  return (
    <div className="app-container">
      <AddProduct form={form} setForm={setForm} />
      <ListProducts form={form} setForm={setForm} />
    </div>
  );
}

export default App;
