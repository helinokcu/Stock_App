import {useState, useEffect} from 'react'
import AddMedicine from './AddMedicine';
import MedicineList from './MedicineList';

function Medicine() {

    const [medicines, setMedicines] = useState([
      {id: 1, medicine: 'Arveles', stock: 59},
      {id: 2, medicine: 'Augmentin', stock:45},
      {id: 3, medicine: 'Apranax', stock:90},
      {id: 4, medicine: 'Benexol', stock:87},
      {id: 5, medicine: 'Buscopan', stock:86},
      {id: 6, medicine: 'Cipralex', stock:38},
      {id: 7, medicine: 'Dolorex', stock:47},
    ]);  
    useEffect(() => {
      console.log(medicines);
    }, [medicines]);

    return (
      <div className="container">
        <h1>Pharmacy</h1>
        <hr></hr>
        <h2>Medicine Stock List</h2>
        <AddMedicine addMedicine={setMedicines} medicines={medicines} />
        <br />
        <MedicineList medicines={medicines} />
      </div>
    );
  }
  
  export default Medicine;