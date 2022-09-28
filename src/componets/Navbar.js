import React from "react";
import logo from "../images/chamber logo.png";
import { Link, NavLink } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const Navbar = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const { logOut } = useUserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleModal = () => {
    setOpen(true);
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/home" className="link-btn">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/discover" className="link-btn">
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="link-btn">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link-btn">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link-btn">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-upload">
          <button onClick={handleModal}>submit</button>
        </div>
        <div className="sign-out">
          <button className="sign-out" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
