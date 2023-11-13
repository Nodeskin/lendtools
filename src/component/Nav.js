import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../asset/usemytools.jpg";

const Nav = () => {
  const {pathname} = useLocation();
  return (
    <div>
      <nav className="nav-bar">
        <img
          src={Logo}
          alt=""
          style={{
            width: "145px",
            height: "80px",
          }}
        />
        <ul className="list">
          <li id="home-key">
            <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Home
            </NavLink>
          </li>

          <li className="nav-list">About Us</li>

          { pathname !== '/request' && <li className="nav-list">
            <NavLink to="/request" style={{ textDecoration: "none" }}>
              Request
            </NavLink> 
          </li>} 

          { pathname !== '/contact' && <li className="nav-list">
            <NavLink to="/contact" style={{ textDecoration: "none" }}>
            Contact Us
            </NavLink>
          </li>}

          { pathname !== '/signIn' && <li className="nav-list">
            <NavLink to="/signIn" style={{ textDecoration: "none" }}>
              Sign In
            </NavLink>
          </li>}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
