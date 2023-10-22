import { Link } from "react-router-dom";
import './NavBar.css';

const ResponsiveAppBar = () => {
  return (
    <div className="navBar">
      <div className="navContainer">
        <span className="logo">
          Pamela Joy Reale
        </span>
          <div className="navLinks">
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              About
            </Link>
            <Link to="/blog" className="link">
              Blog
            </Link>
          </div>
      </div>
    </div>
  );
}
export default ResponsiveAppBar;