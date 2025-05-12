// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>My LMS</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/Signup">Sign Up</Link>
        <Link to="/Login">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
