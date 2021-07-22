import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup.string().trim().required("First name is required."),
  last_name: yup.string().trim(),
  email: yup
    .string()
    .email("Please provide a valid E-Mail address.")
    .required("E-Mail must be provieded"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(4, "Your password must be at least 4 characters long."),
  tos: yup.boolean(),
});

export default formSchema;
