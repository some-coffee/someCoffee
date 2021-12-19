import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
