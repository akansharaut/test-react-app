import Suggestions from "./Suggestions";
import dataSuggestions from '../orders.json';
import SelectOption from './SelectOption';

function TableRows({columns, handleChange}) {
  console.log(dataSuggestions);
    return (
      columns.map((column, index)=>{
        const lgElement = dataSuggestions[column].logical_element[0];
        const pyElementDesc = dataSuggestions[column].physical_element_description[0];
        const piiFlag = dataSuggestions[column].pii_flag[0];
        console.log(piiFlag);
          return(
            <tr key={index}>
              <td><input type="text" value={column} name="pdElement" className="form-control"/></td>
              <td><Suggestions data={lgElement}/></td>
              <td><Suggestions data={pyElementDesc}/></td>
              <td>
                <SelectOption data={piiFlag}/>
              </td>
            </tr>
          )
      })
    );
}

export default TableRows;