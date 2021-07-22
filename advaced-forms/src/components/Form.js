import React from "react";

export default function Form(props) {
  const { values, handleChange, disabled } = props;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    handleChange(name, valueToUse);
  };

  const onSubmit = (e) => {};

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Add User</h2>
        <div className="errors">
          <div>example name error</div>
          <div>example email error</div>
          <div>example password error</div>
          <div>example ToS error</div>
        </div>
        <div className="inputs">
          <label>
            First Name:
            <input
              name="first name"
              type="text"
              value={values.firstName}
              onChange={onChange}
            />
          </label>
          <label>
            Last Name:
            <input
              name="last name"
              type="text"
              value={values.lastName}
              onChange={onChange}
            />
          </label>
          <label>
            E-Mail:
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={onChange}
            />
          </label>
          <label>
            By checking this box you agree to our Terms of Service
            <input
              name="tos"
              type="checkbox"
              checked={values.tos}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <button disabled={disabled}>Submit</button>
        </div>
      </div>
    </form>
  );
}
