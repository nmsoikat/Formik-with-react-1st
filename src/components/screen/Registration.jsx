import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNum: "",
  password: "",
  confirmPass: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!").min(2, "Too short!"),
  lastName: Yup.string().required("Required!").min(2, "Too short!"),
  email: Yup.string().required("Required!").email("Invalid email format!"),
  phoneNum: Yup.string()
    .required("Required!")
    .min(11, "BD phone number format (11 digit allow)")
    .max(11, "Too long!"),
  password: Yup.string().required("Required!").min(6, "Too short!"),
  confirmPass: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match!"
  ),
});

const onSubmit = (values) => {
  console.log(values);
};

// using formik component
function Registration() {
  return (
    <div className="form-container  st-3">
      <h2 className="form-caption text-center">Join Today</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="st-1">
          <div className="field-wrap field-row">
            <div className="field-col">
              <label htmlFor="first-name">First Name</label>
              <Field
                type="text"
                name="firstName"
                id="first-name"
                className="field-style"
                placeholder="First Name"
              />
              <ErrorMessage name="firstName" />
            </div>
            <div className="field-col">
              <label htmlFor="last-name">Last Name</label>
              <Field
                type="text"
                name="lastName"
                id="last-name"
                className="field-style"
                placeholder="Last Name"
              />
              <ErrorMessage name="lastName" />
            </div>
          </div>

          <div className="field-wrap">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              className="field-style"
              placeholder="example@dom.com"
            />
            <ErrorMessage name="email" />
          </div>

          <div className="field-wrap">
            <label htmlFor="phone">Phone Number</label>
            <Field
              type="tel"
              name="phoneNum"
              id="phone-num"
              className="field-style"
              placeholder="01***-******"
            />
            <ErrorMessage name="phoneNum" />
          </div>

          <div className="field-wrap">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              className="field-style"
              placeholder="* * * * * *"
            />
            <ErrorMessage name="password" />
          </div>

          <div className="field-wrap">
            <label htmlFor="confirm-pass">Confirm Password</label>
            <Field
              type="password"
              name="confirmPass"
              id="confirm-pass"
              className="field-style"
              placeholder="* * * * * *"
            />
            <ErrorMessage name="confirmPass" />
          </div>

          <div className="field-wrap">
            <button className="btn-submit" type="submit">
              Confirm
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
