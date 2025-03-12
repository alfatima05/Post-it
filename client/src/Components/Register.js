import loginImage from "../Images/loginImage.jpg";
import { userSchema } from "../Validations/Validations";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../Features/UserSlice";
import React, { useState } from "react";
=======
import { useSelector } from "react-redux";
>>>>>>> 2110b064b6ed6e0750ac811cb41c48cdf8dabc64

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

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const userList = useSelector((state) => state.users.value);
<<<<<<< HEAD
  //Create the state variables

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  // Handle form submission

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      console.log("Form Data", data); // You can handle the form submission here
      alert("Validation all good.");
    } catch (error) {
      console.log("Error.");
    }
  };

  const handleDelete = (email) => {
    dispatch(deleteUser(email));
=======

  // Handle form submission

  const onSubmit = (data) => {
    console.log("Form Data", data); // You can handle the form submission here
>>>>>>> 2110b064b6ed6e0750ac811cb41c48cdf8dabc64
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            Name<br></br>
<<<<<<< HEAD
            <input
              type="text"
              name="name"
              {...register("name", {
                onChange: (e) => setname(e.target.value),
              })}
            />
=======
            <input type="text" name="name" {...register("name")}></input>
>>>>>>> 2110b064b6ed6e0750ac811cb41c48cdf8dabc64
          </Col>
          <p className="error">{errors.name?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Email<br></br>
<<<<<<< HEAD
            <input
              type="email"
              name="email"
              {...register("email", {
                onChange: (e) => setemail(e.target.value),
              })}
            />
=======
            <input type="email" name="email" {...register("email")}></input>
>>>>>>> 2110b064b6ed6e0750ac811cb41c48cdf8dabc64
          </Col>
          <p className="error">{errors.email?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Password<br></br>
            <input
              type="password"
              name="password"
<<<<<<< HEAD
              {...register("password", {
                onChange: (e) => setpassword(e.target.value),
              })}
            />
=======
              {...register("password")}
            ></input>
>>>>>>> 2110b064b6ed6e0750ac811cb41c48cdf8dabc64
          </Col>
          <p className="error">{errors.password?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            Confirm Password<br></br>
            <input
              type="password"
              name="confirmpassword"
<<<<<<< HEAD
              {...register("confirmPassword", {
                onChange: (e) => setconfirmPassword(e.target.value),
              })}
            />
=======
              {...register("confirmPassword")}
            ></input>
>>>>>>> 2110b064b6ed6e0750ac811cb41c48cdf8dabc64
          </Col>
          <p className="error">{errors.confirmPassword?.message}</p>
        </Row>
        <Row>
          <Col md={6}>
            <Button>Register</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={6}>
          <h1>List Of Users</h1>
          <table className="table">
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
<<<<<<< HEAD
                  <td>
                    <Button onClick={() => handleDelete(user.email)}>
                      Delete User
                    </Button>
                  </td>
=======
>>>>>>> 2110b064b6ed6e0750ac811cb41c48cdf8dabc64
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
