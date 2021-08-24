import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please enter your email";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email";
  }

  if (!values.password) {
    errors.password = "Please enter your password";
  } else if (values.password.length < 6) {
    errors.password = "At least 6 character";
  }

  return errors;
};

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate,

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  // custom class add to error field
  const fieldError = (field) => {
    if (formik.touched[field] && formik.errors[field]) {
      return "error";
    }
  };
  return (
    <div className="form-container st-3">
      <h2 className="form-caption text-center">Welcome Back</h2>
      <form className="st-1" onSubmit={formik.handleSubmit}>
        <div className={`field-wrap ${fieldError("email")}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="field-style"
            placeholder="example@mail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className={`field-wrap ${fieldError("password")}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="field-style"
            placeholder="******"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // helper method
            {...formik.getFieldProps("password")}
          />

          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </div>

        <div className="field-wrap">
          <button className="btn-submit" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
