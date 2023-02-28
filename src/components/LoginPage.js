import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const LoginPage = ({logo}) => {
    return (
      <Card style={{ width: '18rem', margin: '50px auto' }}>
        <Card.Img variant="top" src={logo} style={{margin:'20px auto', width: '100px'}}/>
        <Card.Body>
            <Card.Title>Register Dataset</Card.Title>
            <Card.Text>
            Register a new dataset with just one click
            </Card.Text>
            <Button variant="primary">Register</Button>
        </Card.Body>
      </Card>
    );
}

export default LoginPage;