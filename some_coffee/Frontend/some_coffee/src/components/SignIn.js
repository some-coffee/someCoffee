import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function SignIn() {
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/user")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const getUserName = (e) => {
    setUserName(e.target.value);
  };

  const check = () => {
    for (let i = 0; i < users.length; i++) {
      if (userName === users[i].name) {
        console.log("user found");
        break;
      } else if (i === users.length - 1) {
        console.log("this user does not exist");
      }
    }
  };

  return (
    <div>
      <form>
        <h1>Sign In</h1>

        <hr />

        <label htmlFor="email">
          <b>User Name</b>
        </label>
        <input
          id="entered_name"
          onChange={getUserName}
          type="text"
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
        <button onClick={check}>Log in</button>
      </form>
    </div>
  );
}

export default SignIn;
