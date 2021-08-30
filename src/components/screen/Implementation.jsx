import { Formik, Form, Field, FieldArray } from "formik";

function Implementation() {
  const initialValues = {
    name: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumber: ["", ""],
    phNumbers: [""],
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="form-container  st-3">
      <h2 className="form-caption text-center">Practice Today</h2>

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          {/* 
              Field component with render-props pattern 
          */}
          <div className="field-wrap">
            <label htmlFor="name">Name</label>
            <Field name="name">
              {(props) => {
                const { field, form, meta } = props;

                return (
                  <div>
                    <input
                      type="text"
                      id="name"
                      {...field}
                      placeholder="your name please"
                      className="field-style"
                    />
                    {meta.touched && meta.error ? (
                      <div>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>

          {/* Working on Nested Object */}
          <div className="field-wrap">
            <label htmlFor="facebook">Facebook</label>
            <Field
              id="facebook"
              name="social.facebook"
              className="field-style"
            />
          </div>
          <div className="field-wrap">
            <label htmlFor="twitter">Twitter</label>
            <Field id="twitter" name="social.twitter" className="field-style" />
          </div>

          {/* Working on Array */}
          <div className="field-wrap">
            <label htmlFor="phonePr">Phone Number one</label>
            <Field id="phonePr" name="phoneNumber[0]" className="field-style" />
          </div>
          <div className="field-wrap">
            <label htmlFor="phoneSe">Phone Number optional</label>
            <Field id="phoneSe" name="phoneNumber[1]" className="field-style" />
          </div>

          {/* 
            -----------------------------------------
            Dynamic form control using FieldArray Component 
            --------------------------------------------
          */}
          <div className="field-wrap">
            <label htmlFor="phNumbers">Phone Numbers (dynamic) </label>
            <FieldArray name="phNumbers">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phNumbers } = values;

                // console.log(fieldArrayProps);

                return (
                  <div>
                    {phNumbers.map((item, index) => (
                      <div key={index}>
                        <Field
                          name={`phNumbers[${index}]`}
                          type="tel"
                          className="field-style-inline"
                          placeholder="01***-******"
                        />
                        <button
                          type="button"
                          className="btnPush"
                          onClick={() => push("")}
                        >
                          +
                        </button>

                        {index > 0 && (
                          <button
                            type="button"
                            className="btnRemove"
                            onClick={() => remove(index)}
                          >
                            x
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
          </div>

          <div className="field-wrap">
            <button className="btn-submit" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Implementation;
