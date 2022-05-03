import { useState } from "react";
import bootstrap from 'bootstrap';

function MedicineList({ medicines }) {
  const [searchText, setSearchText] = useState("");

  // const [newStock, setNewStock] = useState('');

  const filtered = medicines.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
      .toString()
      .toLowerCase()
      .includes(searchText.toLocaleLowerCase())
    );
  });

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <div className="search-div">
        <input
          className="search"
          placeholder="Search Medicine"
          value={searchText}
          onChange={onChange}>
        </input>
      </div>
      
      {/* <ul>
        {filtered.map((medicine, i) => (
          <li key={i}>
            <span>{medicine.id}</span>
            <span>{medicine.medicine}</span>
            <span>{medicine.stock}</span>
            <span><button onClick={() => setNewStock()}>Arttır</button></span>
            <span><button onClick={() => setNewStock()}>Azalt</button></span>
            <span><button>Sil</button></span>
          </li>
        ))}
      </ul>  */}
      <table className="table table-striped">
        <thead className="thead-light">
          <tr>
              <th scope="col">ID</th>
              <th scope="col">Medicine</th>
              <th scope="col">Stock</th>
              <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
        {filtered.map((medicine, i) => (
          <tr key={i}>
            <td scope="row">{medicine.id}</td>
            <td scope="row">{medicine.medicine}</td>
            <td scope="row">{medicine.stock}</td>
            <td scope="row" className="btns">
              <button>+</button>
              <button >-</button>
              <button className="btn btn-danger">x</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineList;
