import React from "react";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  return (
    <>
      <h2 className="main-title text-center st-2">Formik With React</h2>
      <select
        className="select-form st-1"
        name="select-form"
        onChange={(e) => {
          history.push(e.target.value);
        }}
      >
        <option value="/">Login</option>
        <option value="/registration">Registration</option>
        <option value="/all-field">All Field</option>
      </select>
    </>
  );
}

export default Header;
