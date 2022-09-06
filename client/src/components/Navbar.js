import Wrapper from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { FaBirthdayCake } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  const toggleNavbar = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <Wrapper>
      <nav className="navbar">
        <div className="nav-center">
          {/* Header */}
          <div className="nav-header">
            <Link to="/" className="nav-logo">
              <Logo />
            </Link>

            <button
              type="button"
              className="btn nav-btn"
              onClick={toggleNavbar}
            >
              <FaBirthdayCake size="20px" />
            </button>
          </div>
          {/* Links */}
          <div className={toggle ? "nav-links show-links" : "nav-links"}>
            <Link to={`/?name=${user}`} className="nav-link">
              Users
            </Link>
            <Link to={`/birthday-events?name=${user}`} className="nav-link">
              Birthday Events
            </Link>
            <Link to={`/my-wishlist?name=${user}`} className="nav-link">
              My Wishlist
            </Link>

            <div className="nav-link user-link">
              <button className="btn">User: {user ? user : ""}</button>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
