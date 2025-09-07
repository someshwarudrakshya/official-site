// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import logo from "../assets/header.webp";
import "./css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load Nepali Patro widget once
  useEffect(() => {
    if (!document.getElementById("wiz1")) {
      const script = document.createElement("script");
      script.src = "https://nepalipatro.com.np/np-widgets/nepalipatro.js";
      script.async = true;
      script.id = "wiz1";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <header className={`header ${scrolled ? "header-small" : ""}`}>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="header-logo" />
          </Link>
        </div>

        <div className="header-right">
          <div
            id="np_widget_wiz1"
            widget="day-sm"
            className="nepali-patro-widget"
          ></div>
        </div>
      </div>
    </header>
  );
}
