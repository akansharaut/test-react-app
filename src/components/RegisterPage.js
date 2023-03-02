import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { MdFileUpload }  from 'react-icons/md';
import { AiOutlinePlus } from "react-icons/ai";
import RegisterForm from './RegisterForm';
import AddDeleteTableRows from './AddDeleteTableRows';
import * as XLSX from 'xlsx';

const RegisterPage = () => {
  const [fileName, setFileName] = useState(undefined);
  const [file, setFile] = useState();
  console.log(fileName);
  const [columnNames, setColumnsNames] = useState([]);
  const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  useEffect(() => {
    const columns = [];

    if(file) {
      Object.keys(file).forEach((value) => {
        console.log(value);
        alphabets.forEach((letter) => {
          const name = `${letter}1`;
          if(name === value){
            columns.push(file[name].v);
            setColumnsNames(columns);
          }
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file, fileName]);

  const onFileUpload = async (e) => {
    const myfile = e.target.files[0];
    setFileName((e.target.files[0].name).split('.')[0]);
    const data = await myfile.arrayBuffer();
    const wb = XLSX.read(data);
    console.log(wb.Sheets.Sheet1);
    setFile(wb.Sheets.Sheet1);
  }

    return (
      <>
        <div style={{margin: '0 0 0 70px'}} className="text-center">
          <ButtonGroup aria-label="Basic example" className='button-list'>
            <Button variant="light"><AiOutlinePlus></AiOutlinePlus> Make a DB conncection</Button>
            <Button variant="light">
              <MdFileUpload></MdFileUpload>
              <input
                color="primary"
                accept=".csv"
                type="file"
                id="icon-button-file"
                onChange={(e) => {onFileUpload(e)}}
                style={{marginLeft: '10px'}}
              />
            </Button>
          </ButtonGroup>
        </div>
        <div className='register-page'>
          <RegisterForm fileName={fileName}/>
          <AddDeleteTableRows columns={columnNames}/>
          <div className="text-center" style={{margin: '50px'}}>
            <Button variant='info'>Save</Button>
          </div>
        </div>
      </>
    );
}

export default RegisterPage;