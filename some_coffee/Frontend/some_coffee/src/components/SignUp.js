import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const addUser = () => {
    const data = {
      name,
      userName,
      password,
      age,
      phoneNo,
      email,
    };
  };

  const getName = (e) => {
    setName(e.target.value);
  };

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const getUserName = (e) => {
    setUserName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const getPhone = (e) => {
    setPhoneNo(e.target.value);
  };

  const getAge = (e) => {
    setAge(e.target.value);
  };

  const getConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const checkPassword = () => {
    if (password !== confirmPassword) console.log("pass word does not match");
  };

  return (
    <div>
      <form>
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          onChange={getName}
          placeholder="Enter Name"
          name="name"
          required
        ></input>
        <br />
        <label htmlFor="user">
          <b>User Name</b>
        </label>
        <input
          type="text"
          onChange={getUserName}
          placeholder="Enter User Name"
          name="name"
          required
        ></input>
        <br />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          onChange={getEmail}
          placeholder="Enter Email"
          name="email"
          required
        ></input>
        <br />
        <label htmlFor="phone">
          <b>Phone No.</b>
        </label>
        <input
          type="text"
          onChange={getPhone}
          placeholder="Enter User Name"
          name="name"
          required
        ></input>
        <br />
        <label htmlFor="age">
          <b>Age</b>
        </label>
        <input
          type="text"
          onChange={getAge}
          placeholder="Enter User Name"
          name="name"
          required
        ></input>
        <br />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          onChange={getPassword}
          placeholder="Enter Password"
          name="psw"
          required
        ></input>
        <br />
        <label htmlFor="psw-repeat">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          onChange={getConfirmPassword}
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        ></input>
        <br />
        <button onClick={checkPassword}>Sign up</button>
      </form>
    </div>
  );
}
export default SignUp;
