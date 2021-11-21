import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { useForm } from "../../hooks/useForm"; 
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import axios from "axios";
import { types } from "../../types/types"; 

export const LoginScreen = () => {
  const [{ email, password }, handleInputChange, reset] = useForm();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_LOGIN_URL, {
        email,
        password,
      })
      .then((response) => {
        const { token } = response.data;
        const action = {
          type: types.login,
          payload: token,
        };
        dispatch(action);
        reset();
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Invalid email or password",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div className="login animate__animated animate__fadeIn animate__slow">
      <h2>Sign In</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@example.com"
            onChange={handleInputChange}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            onChange={handleInputChange}
            value={password}
          />
        </FormGroup>
        <button className="btn btn-success">
          Log in <i className="fas fa-sign-in-alt"></i>
        </button>
      </Form>
    </div>
  );
};
