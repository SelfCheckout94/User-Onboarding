import "./App.css";

import React, { useState } from "react";

import Form from "./components/Form";
import axios from "axios";
import { reach } from "yup";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  tos: "",
};

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, stFormErrors] = useState(initialFormErrors);
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
