import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";
import About from "./components/About";
import Product from "./components/Product";
import Menu from "./components/Menu";
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
          <Route path="/Product" element={<Product />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
