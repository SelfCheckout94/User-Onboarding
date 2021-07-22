import "./App.css";

import React, { useEffect, useState } from "react";

import Form from "./components/Form";
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

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  console.log(formValues);
  return (
    <div className="App">
      <Form values={formValues} />
    </div>
  );
}

export default App;
