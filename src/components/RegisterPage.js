import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { MdFileUpload }  from 'react-icons/md';
import { AiOutlinePlus } from "react-icons/ai";
import LabTabs from './RegisterForm';

const RegisterPage = () => {
    return (
      <div>
        <ButtonGroup aria-label="Basic example" className='button-list'>
          <Button variant="light"><AiOutlinePlus></AiOutlinePlus> Make a DB conncection</Button>
          <Button variant="info"><MdFileUpload></MdFileUpload></Button>
        </ButtonGroup>
        <LabTabs/>
      </div>
    );
}

export default RegisterPage;