import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormSearch } from "../../hooks/useFormSearch";
import { types } from "../../types/types";
import axios from 'axios'

export const Input = () => {
  const [values, handleInputChange] = useFormSearch();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values !== "") {
      try {
        const url = `https://jsonplaceholder.typicode.com/posts/${values}`;
        const response = axios.get(url)
        console.log((await response).data);
        const results  = (await response).data;
        console.log(results)
        const action = {
          type: types.search,
          payload: results,
        };
        dispatch(action);
      } catch (error) {
        Swal.fire({
          title: "id equivocado",
          text: "No hay resultados de busqueda",
          icon: "warning",
          confirmButtonText: "Ok",
        });
      }
    } else {
      Swal.fire({
        title: "La busqueda esta mal realizada",
        text: "El campo de nombre no puede estar vacío",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Id del posts"
         
          aria-describedby="basic-addon2"
          value={values}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        <div className="input-group-append"></div>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};
