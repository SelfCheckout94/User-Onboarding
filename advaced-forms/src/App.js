import "./App.css";

import React, { useEffect, useState } from "react";

import Form from "./components/Form";
import User from "./components/User";
import axios from "axios";
import { reach } from "yup";
import schema from "./validation/formSchema";
import { v4 as uuidv4 } from "uuid";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  tos: "",
};
const initialUsers = [];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users`)
      .then((res) => {
        // console.log("res", res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const postNewUser = (newUser) => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        setUsers([res.data.data, ...users]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);
  console.log(users);
  return (
    <div className="App">
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map((user) => {
        return <User key={uuidv4()} userDetails={user} />;
      })}
    </div>
  );
}

export default App;
