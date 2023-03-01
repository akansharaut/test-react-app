import { useState } from "react";
import TableRows from "./TableRows"

function AddDeleteTableRows(){
  const [rowsData, setRowsData] = useState([]);
  const addTableRows = ()=>{
    const rowsInput={
        pdElement:'',
        ldElement:'',
        description:'',
        pii: '' ,
    } 
    setRowsData([...rowsData, rowsInput])
  }

  const deleteTableRows = (index)=>{
    const rows = [...rowsData];
    rows.splice(index, 1);
    setRowsData(rows);
  }
 
  const handleChange = (index, evnt)=>{
  
  const { name, value } = evnt.target;
  const rowsInput = [...rowsData];
  rowsInput[index][name] = value;
  setRowsData(rowsInput);
}

  return(
      <div className="container">
          <div className="row">
              <div>

              <table className="table">
                  <thead>
                    <tr>
                        <th>Physical Data Element</th>
                        <th>Logical Data Element</th>
                        <th>Physical Data Element Description</th>
                        <th>PII</th>
                        <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                    </tr>

                  </thead>
                  <tbody>

                  <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                  </tbody> 
              </table>

              </div>
              <div>

              </div>
          </div>
      </div>
  )

}
export default AddDeleteTableRows;