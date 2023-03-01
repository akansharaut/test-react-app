import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const LoginPage = ({logo}) => {
    return (
      <div className='login-page'>
        <h1 className="App-header">
            Welcome to the Dataset Registry
        </h1>
        <Card style={{ width: '18rem', margin: '50px auto' }}>
          <Card.Img variant="top" src={logo} style={{margin:'20px auto', width: '100px'}}/>
          <Card.Body>
              <Card.Title>Register Dataset</Card.Title>
              <Card.Text>
              Register a new dataset with just one click
              </Card.Text>
              <Button variant="primary"> <Link className="register-button" to="/register">Register</Link></Button>
          </Card.Body>
        </Card>
      </div>
    );
}

export default LoginPage;