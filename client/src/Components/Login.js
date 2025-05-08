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
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchemaValidation } from "../Validations/UserValidations";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Features/UserSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const dispatch = useDispatch();
  //Retrieve the current value of the state from the store, name of state is users with a property user
  const user = useSelector((state) => state.users.user);
  const isSuccess = useSelector((state) => state.users.isSuccess);
  const isError = useSelector((state) => state.users.isError);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchemaValidation) });

  var x = 1;
  // Handle form submission

  const onSubmit = (data) => {
    console.log("Form Data", data); // You can handle the form submission here
  };

  //function that will be invoked when the user clicks the login button
  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    dispatch(login(userData)); //dispatch a login action from the user slice.
  };

  useEffect(() => {
    if (isError) {
      navigate("/login");
    }

    if (isSuccess) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user, isError, isSuccess]);

  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="center">
            <img src={logo} className="center" />
          </Col>
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md={4} className="center">
              Username<br></br>
              <FormGroup>
                <Label for="name">Name</Label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                ></input>
              </FormGroup>
            </Col>
            <p className="error">{errors.email?.message}</p>
          </Row>

          <Row>
            <Col md={4} className="center">
              Password<br></br>
              <FormGroup>
                <Label for="name">Name</Label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                ></input>
              </FormGroup>
            </Col>
            <p className="error">{errors.email?.message}</p>
          </Row>

          <Row>
            <Col md={4} className="center">
              <Button
                color="primary"
                className="button"
                onClick={() => handleLogin()}
              >
                Sign in
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="center">
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
