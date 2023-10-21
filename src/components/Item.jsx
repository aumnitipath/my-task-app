import React from "react";
import "./Item.css";

const Item = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, deleteTask, editTask } = props;

  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <button onClick={() => deleteTask(data.id)} className="btn">
          ลบ
        </button>
        <button className="btn" onClick={() => editTask(data.id)}>
          แก้ไข
        </button>
      </div>
    </div>
  );
};

export default Item;
