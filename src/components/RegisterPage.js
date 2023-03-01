import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { MdFileUpload }  from 'react-icons/md';
import { AiOutlinePlus } from "react-icons/ai";
import RegisterForm from './RegisterForm';
import AddDeleteTableRows from './AddDeleteTableRows';

const RegisterPage = () => {
    const [fileName, setFileName] = useState();

    const onFileUpload = (e) => {
      setFileName((e.target.files[0].name).split('.')[0]);
    }

    return (
      <>
        <div style={{margin: '0 0 0 70px'}}>
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
          <AddDeleteTableRows />
          <div className="text-center" style={{margin: '50px'}}>
            <Button variant='info'>Save</Button>
          </div>
        </div>
      </>
    );
}

export default RegisterPage;