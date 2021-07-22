import "./App.css";

import React, { useEffect, useState } from "react";

import Form from "./components/Form";
import User from "./components/User";
// import User from "./components/User";
import axios from "axios";
import { reach } from "yup";
import schema from "./validation/formSchema";
import { v4 as uuidv4 } from "uuid";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  tos: false,
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data.data, ...users]);
      })
      .catch((err) => {
        console.error(err);
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

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    const newUser = {
      first_name: formValues["first_name"].trim(),
      last_name: formValues.lastName.trim(),
      email: formValues.email.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <Form
        values={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <div>
        {users.map((user) => {
          return <User key={uuidv4()} userDetails={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
