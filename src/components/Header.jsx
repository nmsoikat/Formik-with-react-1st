import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

function Header() {
  const history = useHistory();
  const location = useLocation();
  // console.log(location);
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
        <option value="/" selected={location.pathname === "/" && true}>
          Login
        </option>
        <option
          value="/registration"
          selected={location.pathname === "/registration" && true}
        >
          Registration
        </option>
        <option
          value="/all-field"
          selected={location.pathname === "/all-field" && true}
        >
          All Field
        </option>
      </select>
    </>
  );
}

export default Header;
