import React from "react";
import { Link } from "react-router-dom";
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="container-fluid min-vh-75 bg-success">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <p className="py-5 text-light">About Fast & Fresh Global LLP</p>
            <p className="text-light">
              To service society at large & Food security issues by acting as a
              connecting link between all sections of the Food Industry{" "}
            </p>
            <ul className="d-flex">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook fs-3 text-light"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram fs-3 text-light"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <p className="text-white">Menu</p>
            <ul className="foot">
              <li className="ms-3">
                <Link to="">Search</Link>
              </li>
              <li className="ms-3">
                <Link to="">Pincode Delivery Areas</Link>
              </li>
              <li className="ms-3">
                <Link to="">Safety Precautions</Link>
              </li>
              <li className="ms-3">
                <Link to="">Return & Refunds</Link>
              </li>
              <li className="ms-3">
                <Link to="">Terms of Service</Link>
              </li>
              <li className="ms-3">
                <Link to="">Shipping Policy</Link>
              </li>
              <li className="ms-3">
                <Link to="">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4">
            <p className="text-light">Our Address</p>
            <p className="text-light">
              D-201 Senapati Bapat Road, High Street Complex BVB Pune 410014
            </p>
            <p className="text-light">+91 35467 64577</p>
            <p className="text-light">xyz12@pureindia.com</p>
            <ul className="d-flex">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook fs-3 text-light"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram fs-3 text-light"></i>
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
