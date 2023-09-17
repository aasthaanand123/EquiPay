import { useState } from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Salary from "./components/Salary";
import Forum from "./components/Forum";
import Trivia from "./components/Trivia";
import SignUp from "./components/SignUp";
import Company from "./components/Company";
import Signin from "./components/Signin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Salary />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/company" element={<Company />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
