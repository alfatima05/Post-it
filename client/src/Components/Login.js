import log from "../Images/loginImage.jpg";
import { Container, Row, Col, Form } from "reactstrap";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Container>
        <img src={log} className="loginImage" />

        <Form>
          <Row>
            <Col md={3}>
              Email
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
              Password
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
              <button>Login</button>
            </Col>
          </Row>
        </Form>
      </Container>

      <p className="smalltext">
        No Account? <Link to="/register">Sign Up now.</Link>
      </p>
    </div>
  );
};

export default Login;
