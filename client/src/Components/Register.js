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
import { userSchema } from "../Validations/Validations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  //For form validation using react-hook-form
  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  //Handel form

  const onSubmit = (data) => {
    //data from the form
    console.log("Form Data", data); // You can handle the form submission here
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
            <input type="text" name="name" {...register("name")}></input>
            <p className="error">{errors.name?.message}</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            Email<br></br>
            <input type="email" name="email" {...register("email")}></input>
            <p className="error">{errors.email?.message}</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
              {...register("password")}
            ></input>
            <p className="error">{errors.password?.message}</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
              {...register("confirmPassword")}
            ></input>
            <p className="error">{errors.confirmPassword?.message}</p>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Register;
