import { env } from 'process';
import { Container, Card, Form, Button } from 'react-bootstrap';

export default function Home() {
  const payload = {
    username: '',
    password: ''
  }

  let onSubmit = () => {
    console.log(payload, env)
  }

  return (
    <Container>
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              <h3>Login</h3>
            </Card.Title>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email / username</Form.Label>
                <Form.Control type="email" placeholder="input email/username" onChange={e => payload.username = e.target.value} />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => payload.password = e.target.value}/>
              </Form.Group>
            </Form>
            <Button variant="outline-primary" onClick={onSubmit}>Login</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  )
}
