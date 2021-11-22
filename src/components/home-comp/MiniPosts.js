import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "reactstrap";
import { types } from "../../types/types";
import Swal from "sweetalert2";

export const MiniPosts = ({ post }) => {
  const [tooltipAddOpen, setTooltipAddOpen] = useState(false);
  const toggleAdd = () => setTooltipAddOpen(!tooltipAddOpen);

  const dispatch = useDispatch();

  const { posts} = useSelector((state) => state.posts);

  
  const handleSelect = (e) => {
    e.preventDefault();
    if (posts.length < 20) {
      
        
          const action = {
            type: types.add,
            payload: post,
          };
          dispatch(action);
        
     
      
    } else {
      Swal.fire({
        title: "Team Completo!",
        text: "No se puede agregar mas de 20 posts",
        icon: "warning",
        confirmButtonText: "Cool",
      });
    }
  };

  return (
    <div>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h5>Info: </h5>
                  <ul>
                    <li>UserId: {post.userId}</li>
                    <li>Id: {post.id}</li>
                  </ul>
          </div>
        </div>
      </div>
      <div className="btn-container-mini-card">
        <button
          type="button"
          className="btn btn-primary btn-mini-card"
          style={{ textDecoration: "underline" }}
          id="TooltipAdd"
          onClick={handleSelect}
        >
          <i className="fas fa-plus"></i>
        </button>
        <Tooltip
          placement="top"
          isOpen={tooltipAddOpen}
          target="TooltipAdd"
          toggle={toggleAdd}
        >
          Añadir Post
        </Tooltip>
      </div>
    </div>
  );
};
