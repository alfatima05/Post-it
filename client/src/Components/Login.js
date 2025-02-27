import loginImage from "../Images/loginImage.jpg";
import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
  Form,
} from "reactstrap";
import logo from "../Images/logo-t.png";
import { Link } from "react-router-dom";
import { userSchema } from "../Validations/Validations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = (data) => {
    console.log("Form Data", data);
  };

  return (
    <div>
      <Container>
        <img src={logo} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={5}>
              Username<br></br>
              <input type="email" name="email" {...register("email")}></input>
            </Col>
            <p className="error">{errors.email?.message}</p>
          </Row>

          <Row>
            <Col md={5}>
              Password<br></br>
              <input
                type="password"
                name="password"
                {...register("password")}
              ></input>
            </Col>
            <p className="error">{errors.password?.message}</p>
          </Row>

          <Row>
            <Col md={5}>
              <Button>Login</Button>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <p className="smalltext">
                No Account? <Link to="/register">Sign Up now.</Link>
              </p>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
