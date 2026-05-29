import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  // contoh user login
  const user =
  JSON.parse(localStorage.getItem("user")) || {
    name: "Guest",
  };

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  // otomatis tutup dropdown saat klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">

        {/* Logo */}
        <div className="navbar-logo">
          <div className="navbar-logo-icon">
            ✓
          </div>

          <div>
            <div className="navbar-logo-text-primary">
              CVision
            </div>

            <div className="navbar-logo-text-secondary">
              Career Classifier
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="navbar-menu">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navbar-menu-button navbar-menu-button-active"
                : "navbar-menu-button"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive
                ? "navbar-menu-button navbar-menu-button-active"
                : "navbar-menu-button"
            }
          >
            History
          </NavLink>

          {/* Account Dropdown */}
          <div
            className="navbar-account"
            ref={dropdownRef}
          >
            <button
              className="navbar-menu-button"
              onClick={() =>
                setShowDropdown(!showDropdown)
              }
            >
              {user.name} ▾
            </button>

            {showDropdown && (
              <div className="account-dropdown">
                <button
                  onClick={handleLogout}
                  className="dropdown-item logout-button"
                >
                  Logout
                </button>

              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}