import React from "react";
import { Form, FormGroup, Input, Label,Card } from "reactstrap";
import { useForm } from "../../hooks/useForm"; 
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import axios from "axios";
import { types } from "../../types/types"; 


export const LoginScreen = () => {
  
  const [{ email, password }, handleInputChange, reset] = useForm ();

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
          text: "Mail o Contraseña erroneas",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
     
    <div className="col-auto p-5 text-center" >
    
      <h2>Iniciar sesión</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Nombre de Usuario</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Alkemy@Gmail.com"
            onChange={handleInputChange}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Contraseña</Label>
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
          Ingresar
        </button>
      </Form>
      
    </div>
    
    </div>
  );
};