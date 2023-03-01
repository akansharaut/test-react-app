function TableRows({rowsData, deleteTableRows, handleChange}) {
    return(
      rowsData.map((data, index)=>{
        const {pdElement, ldElement, description, pii}= data;
          return(
            <tr key={index}>
              <td><input type="text" value={pdElement} onChange={(evnt)=>(handleChange(index, evnt))} name="pdElement" className="form-control"/></td>
              <td><input type="text" value={ldElement}  onChange={(evnt)=>(handleChange(index, evnt))} name="ldElement" className="form-control"/> </td>
              <td><input type="text" value={description}  onChange={(evnt)=>(handleChange(index, evnt))} name="description" className="form-control" /> </td>
              <td><input type="text" value={pii}  onChange={(evnt)=>(handleChange(index, evnt))} name="pii" className="form-control" /> </td>
              <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>
          )
      })
   
    )
    
}

export default TableRows;