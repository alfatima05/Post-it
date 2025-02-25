import { Container, Row, Col, Form } from "reactstrap";

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <Container>
        <Form>
          <Row>
            <Col>
              <p>Name</p>
              <input
                id="exampleEmail"
                name="email"
                placeholder="Enter Name"
                type="name"
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <p>Email</p>
              <input
                id="exampleEmail"
                name="email"
                placeholder="Enter Email"
                type="email"
              />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <p>Password</p>
              <input
                id="examplePassword"
                name="password"
                placeholder="Enter password "
                type="password"
              />
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <p>Confierm password</p>
              <input
                id="examplePassword"
                name="password"
                placeholder="Confierm password "
                type="password"
              />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <button>Register</button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Register;
