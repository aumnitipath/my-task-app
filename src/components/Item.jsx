import React from "react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <button className="btn">ลบ</button>
        <button className="btn">แก้ไข</button>
      </div>
    </div>
  );
};

export default Item;
