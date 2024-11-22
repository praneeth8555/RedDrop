import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './Header.css'; // Import the CSS file

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-brand h1">
          <BiDonateBlood color="red" /> Red Drop
        </div>
        <ul className="navbar-nav flex-row">
          <li className="nav-item mx-3">
            <p className="nav-link mb-0 d-flex align-items-center " style={{ fontWeight: "500", fontSize: "20px" }}>
              <BiUserCircle className="me-2" size={28} /> Welcome{" "}
              {user?.name || user?.hospitalName || user?.organisationName}
              &nbsp;
              <span className="badge px-1 py-2 mx-10">{user?.role}</span>
            </p>
          </li>
          {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
            <li className="nav-item mx-3">
              <Link to="/analytics" className="nav-link" style={{ fontWeight: "500", fontSize: "20px" }}>
                Analytics
              </Link>
            </li>
          ) : (
            <li className="nav-item mx-3">
              <Link to="/" className="nav-link" style={{ fontWeight: "500", fontSize: "20px" }}>
                Home
              </Link>
            </li>
          )}
          <li className="nav-item mx-3" style={{ paddingTop: "4px" }}>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;