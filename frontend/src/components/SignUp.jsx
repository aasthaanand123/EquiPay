import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signupForm.css";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Tooltip from "./Tooltip";
function SignUp() {
  const genders = [
    { value: "Woman", label: "Woman" },
    { value: "Man", label: "Man" },
    { value: "Non-binary", label: "Non-binary" },
    { value: "Transgender", label: "Transgender" },
    { value: "Intersex", label: "Intersex" },
    { value: "Gender non-conforming", label: "Gender non-conforming" },
    { value: "Other", label: "Other" },
    { value: "Prefer not to say", label: "Prefer not to say" },
  ];
  const [values, setValues] = useState({
    email: "",
    pass: "",
    confirmPass: "",
    gender: [],
  });
  const animatedComponents = makeAnimated();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    const value =
      e.target.name !== "gender" ? e.target.value : values["gender"];
    setValues({ ...values, [e.target.name]: value });
  };
  const handleGender = (selectedOption) => {
    setValues({ ...values, ["gender"]: selectedOption });
  };
  console.log(values);
  return (
    <div className="card">
      <div className="formInp">
        <form onSubmit={handleSubmit}>
          <div className="formHead">
            <h2>Sign up now</h2>
            <p>
              Already existing user? <Link to="/signin">Sign In</Link>
            </p>
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
          <div className="gender-input">
            <label>
              Select your gender
              <Tooltip
                text={
                  "We ask for this field because it helps us to provide you with an accurate representation of pay provided in companies for each gender should you choose to reveal your pay."
                }
                children={<HelpOutlineOutlinedIcon />}
              />{" "}
              :
            </label>

            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              name="gender"
              options={genders}
              className="basic-multi-select"
              onChange={handleGender}
            />
          </div>
          <div className="input">
            <label>Enter a password:</label>
            <input
              type="password"
              name="pass"
              placeholder="Password"
              onChange={onChange}
            ></input>
          </div>
          <div className="input">
            <label>Confirm your password:</label>
            <input
              type="password"
              name="confirmPass"
              placeholder="Confirm Password"
              onChange={onChange}
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
