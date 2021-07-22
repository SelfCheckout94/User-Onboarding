import React from "react";

export default function Form(props) {
  const { values } = props;

  const onChange = (e) => {};

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
              value={values.first_name}
              onChange={onChange}
            />
          </label>
          <label>
            Last Name:
            <input
              name="last name"
              type="text"
              value={values.last_name}
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
              value={values.tos}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
