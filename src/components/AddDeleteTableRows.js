import { useState } from "react";
import TableRows from "./TableRows"

const AddDeleteTableRows = ({columns}) => {
  console.log(columns);
  const [rowsData, setRowsData] = useState([]);
  const handleChange = (index, evnt)=> {
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
                    </tr>

                  </thead>
                  <tbody>
                  <TableRows columns={columns} handleChange={handleChange} />
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