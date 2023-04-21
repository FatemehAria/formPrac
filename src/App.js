import { Form, Formik } from "formik";
import * as yup from "yup";
import "./App.css";

function App() {
  const submission = () => {
    console.log("Submitting");
  };

  const validationSch = yup.object().shape({
    username: yup
      .string()
      .min(3, "username must be atleast 3 characters")
      .required("username is required"),
    email: yup.string().email("invalid email").required("email is required"),
    password: yup.number().required("password is required"),
  });

  return (
    <div className="App">
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmpassword: "",
          email: "",
        }}
        onSubmit={submission}
        validationSchema={validationSch}
      >
        {(props) => {
          console.log(props);
          return (
            <div>
              <Form>
                <label htmlFor="username">Username</label>
                <div>
                  <input
                    type="text"
                    placeholder="username"
                    id="username-input"
                    name="username"
                    onChange={props.handleChange("username")}
                    value={props.values.username}
                  />
                  {props.errors.username && (
                    <span>{props.errors.username}</span>
                  )}
                </div>

                <label htmlFor="password">Password</label>
                <div>
                  <input
                    type="password"
                    placeholder="password"
                    id="password-input"
                    name="password"
                    onChange={props.handleChange("password")}
                    value={props.values.password}
                  />
                  {props.errors.password && (
                    <span>{props.errors.password}</span>
                  )}
                </div>

                <label htmlFor="confirm-password">Confirm Password</label>
                <div>
                  <input
                    type="password"
                    placeholder="enter password again"
                    name="confirm-password"
                    value={props.values.confirmpassword}
                    onChange={props.handleChange("confirmpassword")}
                  />
                  {props.errors.confirmpassword && (
                    <span>{props.errors.confirmpassword}</span>
                  )}
                </div>

                <label htmlFor="email">Email</label>
                <div>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={props.values.email}
                    onChange={props.handleChange("email")}
                  />
                  {props.errors.email && <span>{props.errors.email}</span>}
                </div>
                <div className="btn-div">
                  <button type="submit">Submit</button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
