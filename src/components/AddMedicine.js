import { useState } from "react";

function AddMedicine({ addMedicine, medicines }) {
  const [form, setForm] = useState({ id:"", medicine: "", stock: "" });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.medicine === "" || form.stock === "") {
      return false;
    }
    addMedicine([...medicines, form]);
    setForm({ id:"", medicine: "", stock: "" });
  };

  return (
    <form onSubmit={onSubmit} className="list">
        <div>
          <input
            type="text"
            className="medicine-input"
            name="medicine"
            placeholder="Medicine Name"
            value={form.medicine}
            onChange={onChange}>
          </input>
        </div>

        <div>
          <input
            type="number"
            className="stock-input"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={onChange}>
          </input>
        </div>

        <div>
          <button className="btn-2">Add</button>
        </div>
    </form>
  );
}

export default AddMedicine;
