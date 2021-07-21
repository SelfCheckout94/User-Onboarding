import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username must be 3 characters long"),
  email: yup
    .string()
    .email("Please enter a valid e-mail address")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .required("please enter your password")
    .min(4, "Password must be at least 4 characters in length"),
  tos: yup.boolean(),
});

export default formSchema;
