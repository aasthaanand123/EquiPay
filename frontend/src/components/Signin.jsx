import React, { useState } from "react";

function Signin() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
    confirmPass: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="card">
      <div className="formInp">
        <form onSubmit={handleSubmit}>
          <div className="formHead">
            <h2>Sign In</h2>
          </div>
          <div className="input">
            <label>Enter your email ID:</label>
            <input
              type="text"
              name="email"
              placeholder="abc@company.com"
              onChange={onChange}
            ></input>
          </div>
          <div className="input">
            <label>Enter your password:</label>
            <input
              type="password"
              name="pass"
              placeholder="Password"
              onChange={onChange}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
