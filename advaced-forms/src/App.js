import "./App.css";

import React, { useEffect, useState } from "react";

import Form from "./components/Form";
// import User from "./components/User";
import axios from "axios";
import { reach } from "yup";
import schema from "./validation/formSchema";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
