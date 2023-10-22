import React from "react";
import "./AddForm.css";

const AddForm = ({ title, setTitle, saveTask, editId }) => {
  return (
    <>
      <h2>Todo List</h2>
      <form onSubmit={saveTask}>
        <div className="form-control">
          <input
            className="text-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {editId ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
