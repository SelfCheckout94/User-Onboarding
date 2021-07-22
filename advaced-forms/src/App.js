import "./App.css";

import React, { useEffect, useState } from "react";

import Form from "./components/Form";
// import User from "./components/User";
import axios from "axios";
import { reach } from "yup";
import schema from "./validation/formSchema";
import { v4 as uuidv4 } from "uuid";

const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  tos: false,
};

const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };
  return (
    <div className="App">
      <Form
        values={formValues}
        handleChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
