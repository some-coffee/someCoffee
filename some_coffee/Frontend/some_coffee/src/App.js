import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
