import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signin() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const createUrl = (r) => {
    return `http://localhost:6474/user/${r}`;
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(createUrl("/auth/login"), values)
      .then((response) => {
        if (response.data) {
          navigate("/company");
        } else {
          console.log("Sign in unsuccessful");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
            <label>Enter your username:</label>
            <input type="text" name="username" onChange={onChange}></input>
          </div>
          <div className="input">
            <label>Enter your password:</label>
            <input
              type="password"
              name="password"
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
