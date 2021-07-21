import React from "react";

export default function Form(props) {
  const { values, change, disabled, submit, errors } = props;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Add User</h2>
        <button disabled={disabled}>submit</button>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
        <div className="form-group inputs">
          <h4>General Informaion</h4>
          <label>
            UserName:
            <input
              type="text"
              name="username"
              onChange={onChange}
              values={values.username}
            />
          </label>
          <label>
            E-Mail:
            <input
              type="email"
              name="email"
              onChange={onChange}
              value={values.email}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={onChange}
              value={values.password}
            />
          </label>
          <label>
            Terms of Service:
            <input
              type="checkbox"
              name="tos"
              onChange={onChange}
              checked={values.tos}
            />
          </label>
        </div>
      </div>
    </form>
  );
}
