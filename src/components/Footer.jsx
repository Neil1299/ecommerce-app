import React from "react";
import { Link } from "react-router-dom";
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="container-fluid min-vh-75 bg-success ">
        <div className="container d-flex justify-content-between ">
      <div className="w-25">
        <p className="py-5 ms-5 text-light">About Fast & Fresh Global LLP</p>
        <p className="ms-5 text-light">
          To service society at large & Food security issues by acting as a
          connecting link between all sections of Food Industry{" "}
        </p>

        <div>
          <ul className="d-flex">
            <li>
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook ms-5 fs-3 text-light"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram ms-5 fs-3 text-light"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 w-25">
        <p className=" ms-5 text-white">Menu</p>
<ul className="foot">


<li className="ms-3"> <Link to="">Search</Link></li>
       <li  className="ms-3"> <Link to="">Pincode Delivery Areas</Link></li>
       <li  className="ms-3"> <Link to="">Saftey Precautions</Link></li>
       <li  className="ms-3"> <Link to="">Return & Refunds</Link></li>
       <li  className="ms-3"> <Link to="">Terms of Service</Link></li>
       <li  className="ms-3"> <Link to="">Shipping Policy</Link></li>
       <li  className="ms-3"> <Link to="">Contact Us</Link></li>

</ul>
      </div>

      <div className="w-25 py-5">
<p className="ms-5 text-light">Our Address</p>
<p className="ms-5 text-light">D-201 Senapati Bapat Road,High Street Complex BVB Pune 410014</p>
<p className="ms-5 text-light">+91 35467 64577</p>
<p className="ms-5 text-light">xyz12@pureindia.com</p>

<div>
          <ul className="d-flex">
            <li>
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook ms-5 fs-3 text-light"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram ms-5 fs-3 text-light"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
