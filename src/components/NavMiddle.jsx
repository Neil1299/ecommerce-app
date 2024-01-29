import React, { useRef } from "react";
import "../css/NavMid.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const NavMiddle = () => {
  const sideNav = useRef(null);

  const openNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = `${250}px`;
    }
  };
  const closeNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = `${0}px`;
    }
  };
  // const toggleSidebar =()=>{
  //   sideNav.current.classList.toggle('sidebar-open')
  // }
  return (
    <>
  
      <nav className="navbar navbar-expand bg-light border d-flex  justify-content-between sticky-top">
       
          <div
            id="mySidenav"
            className="navbar navbar-expand sidenav "
            ref={sideNav}
          >
          <span
            href=""
            className="closebtn text-dark"
            onClick={closeNav}
          >
            &times;
          </span>
          <ul className="sidenav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <hr />
            <li>
              <Link to="/allproduct">All Products</Link>
            </li>
            <hr />
            <li>
              <Link to="/allfruit">Fruits</Link>
            </li>
            <hr />
            <li>
              <Link to="/allveg">Vegetables</Link>
            </li>
            <hr />
            <li>
              <Link to="/exoticfruit">Exotic Fruits</Link>
            </li>
            <hr />
            <li>
              <Link to="/mushroom">Mushrooms</Link>
            </li>
            <hr />
            <li>
              <Link to="/organicmicro">Organic Microgreen & Vegetables</Link>
            </li>
            <hr />
            <li>
              <Link to="/saladitems">salad Items</Link>
            </li>
            <hr />
            <li>
              <Link to="">Combo Deals</Link>
            </li>
            <hr />
            <li>
              <Link to="">About Us</Link>
            </li>
            <hr />
            <li>
              <Link to="/login">Login</Link>
            </li>
            <hr />
            <li>
              <Link to="">Contact Us</Link>
            </li>
            <hr />
            <li>
              <Link to="/login">Account</Link>
            </li>
            <hr />
          </ul>
        </div>

        <span onClick={openNav} className="fs-2 ms-2">
          &#9776;
        </span>
        <div className="bg-light rounded-circle">
          <img
            style={{ height: "100px" }}
            className=" rounded-circle"
            src={logo}
            alt=""
          />
        </div>

        <div>
          <ul className="d-flex ">
            <li>
             <Link to="/login"> <i className="fa-solid fa-user me-3 fs-5"> </i></Link>
            </li>
            <li>
              <i className="fa-solid fa-magnifying-glass me-3 fs-5"></i>
            </li>
            <li>
              <i className="fa-solid fa-cart-shopping me-3 fs-5"></i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavMiddle;
