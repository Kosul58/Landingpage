import "./Components/Landingpage.css";
import Landingpage from "./Components/landingpage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./Components/Loginpage/login";
import Signup from "./Components/Registerpage/register";
import Calculate from "./Components/Calculate/calculate";
import Dashboard from "./Components/Dashboard/dashboard";
import About from "./Components/About/about";
import Admin from "./Components/admin";
import Search from "./Components/Search/search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
