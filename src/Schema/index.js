import * as yup from "yup";
const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const validationSch = yup.object().shape({
    // error message tooye email neveshte shode
  username: yup.string().min(5, "username must be atleast 5 characters").max(24,"Must be at most 24 letters").required("username is required"),
  email: yup.string().email("invalid email").required("email is required"),
  password: yup.string().min(8,"Must be at least 8 characters").max(24,"Must be at most 24 characters").matches(pass_reg,{message:"Your password must contain '!' , a number"}).required("password is required"),
  confirmpassword: yup.string().oneOf([yup.ref("password"),null],"passwords does not match")
});