import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>제목</Card.Title>
        <Card.Text>
          날짜
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;