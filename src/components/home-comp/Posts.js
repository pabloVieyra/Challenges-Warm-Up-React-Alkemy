import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Tooltip } from "reactstrap";
import { types } from "../../types/types";



export const Posts = ({ post }) => {
  const [tooltipInfoOpen, setTooltipInfoOpen] = useState(false);
  const toggleInfo = () => setTooltipInfoOpen(!tooltipInfoOpen);

  const [tooltipDeleteOpen, setTooltipDeleteOpen] = useState(false);
  const toggleDelete = () => setTooltipDeleteOpen(!tooltipDeleteOpen);

  const [tooltipDeleteOpenF, setTooltipDeleteOpenF] = useState(false);
  const toggleDeleteF = () => setTooltipDeleteOpenF(!tooltipDeleteOpenF);

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("entro")
    const action = {
      type: types.delete,
      payload: post.id,
    };
    dispatch(action);
    
  };

  const handleDeleteF = (e) => {
    e.preventDefault();
    console.log("entro")
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
    const action = {
      type: types.delete,
      payload: post.id,
    };
    dispatch(action);
    Redirect("/");
  };



 
  return (
   <div>
     
    <div className="col animate__animated animate__fadeIn animate__slow">
       
        <div className="card-body">
          <h5 className="card-title">Title:{post.title}</h5>
          <ul className="ps-0 list">
                    <li>UserId: {post.userId}</li>
                    <li>Id: {post.id}</li>
          </ul>
          <NavLink
            className="btn btn-info btn-more-info"
            exact
            to={`/posts/${post.id}`}
            style={{ textDecoration: "underline" }}
            id="TooltipInfo"
          >
            <i className="fas fa-plus"></i>
          </NavLink>
          <Tooltip
            placement="top"
            isOpen={tooltipInfoOpen}
            target="TooltipInfo"
            toggle={toggleInfo}
          >
            More info!
          </Tooltip>
          
          <button
            type="button"
            className="btn btn-ligth btn-delete"
            style={{
              textDecoration: "underline",
            }}
            id="TooltipDelete"
            onClick={handleDelete}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <Tooltip
            placement="bottom"
            isOpen={tooltipDeleteOpen}
            target="TooltipDelete"
            toggle={toggleDelete}
          >
            Delete De la lista
          </Tooltip>
          <div></div>
          {/* delete de todos */}
          <button
            type="button"
            className="btn btn-danger btn-delete"
            style={{
              textDecoration: "underline",
            }}
            id="TooltipDeleteF"
            onClick={handleDeleteF}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
          <Tooltip
            placement="bottom"
            isOpen={tooltipDeleteOpenF}
            target="TooltipDeleteF"
            toggle={toggleDeleteF}
          >
            Delete De la Api
          </Tooltip>
        </div>
        
      </div>
      
    </div>
  );
};
