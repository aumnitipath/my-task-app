import React from "react";
import "./AddForm.css";

const AddForm = () => {
  return (
    <>
      <h2>App Management</h2>
      <form>
        <div className="form-control">
          <input className="text-input" type="text" />
          <button className="submit-btn" type="submit">
            add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddForm;
