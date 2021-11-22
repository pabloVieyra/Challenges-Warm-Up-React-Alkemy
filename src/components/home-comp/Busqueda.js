import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { MiniPosts } from "./MiniPosts";
import { Input } from "./Input";
import { types } from "../../types/types";

export const Busqueda = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
    const action = {
      type: types.add,
      payload: "",
    };
    dispatch(action);
  };

  const dispatch = useDispatch();

  const state = useSelector((state) => state.search);

  const { posts } = useSelector((state) => state.posts);

  return (
    <div>
      <Button className="btn btn-primary btn-add" onClick={toggle}>
        <i className="fas fa-plus"></i>
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Buscar posts</ModalHeader>
        <ModalBody>
          <Input />
          <div className="overflow-auto">
            
                    <MiniPosts key={state.id} post={state} />
                
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
