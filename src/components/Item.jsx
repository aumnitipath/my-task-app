import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "./Item.css";

const Item = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, deleteTask, editTask } = props;

  return (
    <div className="list-item">
      <p className="title">
        <li>{data.title}</li>
      </p>
      <div className="button-container">
        <BsTrash3 onClick={() => deleteTask(data.id)} className="btn" />
        <FiEdit className="btn" onClick={() => editTask(data.id)} />
      </div>
    </div>
  );
};

export default Item;
