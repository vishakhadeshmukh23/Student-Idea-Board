import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo">Student Idea Board</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Explore</Link>
        <Link to="/add" className="add-btn">Add Idea</Link>
      </div>
    </nav>
  );
};

export default Header;
