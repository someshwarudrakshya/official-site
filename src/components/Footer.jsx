import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import contactImg from "../assets/contact.avif";

import "./css/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="Footer-container">
        <div className="footer-grid">
          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/download">Download</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Schemes */}
          <div className="footer-col">
            <h4>Our Schemes</h4>
            <ul>
              <li>
                <Link to="/services/saving">Savings Accounts</Link>
              </li>
              <li>
                <Link to="/services/loan">Affordable Loans</Link>
              </li>
              <li>
                <Link to="/services/required">Daily Savings</Link>
              </li>
              <li>
                <Link to="/services/required">Easy Withdrawals</Link>
              </li>
              <li>
                <Link to="/services/required">Fast Processing</Link>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div className="footer-col">
            <h4>Membership</h4>
            <ul>
              <li>
                <Link to="/about/messagefrom">Benefits</Link>
              </li>
              <li>
                <Link to="/about/messagefrom">How to Join</Link>
              </li>
              <li>
                <Link to="/about/messagefrom">Farmer Resources</Link>
              </li>
              <li>
                <Link to="/about/messagefrom">Training Programs</Link>
              </li>
              <li>
                <Link to="/about/messagefrom">Success Stories</Link>
              </li>
            </ul>
          </div>

          {/* Contact Person */}
          <div className="footer-col contact-person">
            <h4>Contact Person</h4>
            <img
              src={contactImg}
              alt="Contact Person"
              className="contact-img"
            />
            <h4>शंकर साह</h4>
            <p>सम्पर्क अधिकारी</p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +977-9817377572 <br />
              +977-9842146148
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            &copy; 2023 - {currentYear} Someshwar Rudrakshya Saving & Credit
            Cooperative Ltd. | Developed by{" "}
            <a
              href="https://prabhat.info.np"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-link"
            >
              Prabhat.info.np
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
