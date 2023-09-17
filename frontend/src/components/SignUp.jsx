import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
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
    name: "",
    age: "",
    gender: "",
    email: "",
    username: "",
    password: "",
  });

  const animatedComponents = makeAnimated();
  const createUrl = (r) => {
    return `http://localhost:6474/user/${r}`;
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(createUrl("auth/signup"), values)
      .then((response) => {
        console.log(response.data);
        navigate("/signin");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const onChange = (e) => {
    const value =
      e.target.name !== "gender" ? e.target.value : values["gender"];
    setValues({ ...values, [e.target.name]: value });
  };
  const handleGender = (selectedOption) => {
    const gender = selectedOption.map((option) => option.label).join(", ");
    setValues({ ...values, gender });
  };
  console.log(values);
  return (
    <div className="card">
      <div className="formInp">
        <form onSubmit={(e) => handleSubmit(e)}>
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
          <div className="input">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              onChange={onChange}
            />
          </div>
          <div className="input">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              placeholder="Your age"
              onChange={onChange}
            />
          </div>
          <div className="gender-input">
            <label>
              Select your gender
              <Tooltip
                text={
                  "We ask for this field because it helps us to provide you with an accurate representation of pay provided in companies for each gender should you choose to reveal your pay."
                }
              >
                <HelpOutlineOutlinedIcon />
              </Tooltip>
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
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Your username"
              onChange={onChange}
            />
          </div>
          <div className="input">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              onChange={onChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
