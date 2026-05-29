import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // 🔥 STATE WAJIB (INI YANG HILANG DI KODE KAMU)
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token")
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // logout
  function handleLogout() {
    localStorage.removeItem("token");

    window.dispatchEvent(new Event("authChange"));

    window.location.href = "/";
  }

  // 🔥 sync auth kalau login/register/logout
  useEffect(() => {
    function syncAuth() {
      setIsLoggedIn(localStorage.getItem("token"));
      setUser(JSON.parse(localStorage.getItem("user")));
    }

    window.addEventListener("authChange", syncAuth);

    return () => {
      window.removeEventListener("authChange", syncAuth);
    };
  }, []);

  const displayName =
    isLoggedIn && user ? user.name : "Guest";

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">

        {/* Logo */}
        <div className="navbar-logo">
          <div className="navbar-logo-icon">✓</div>

          <div>
            <div className="navbar-logo-text-primary">
              CVision
            </div>
            <div className="navbar-logo-text-secondary">
              Career Classifier
            </div>
          </div>
        </div>

        {/* Menu */}
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

          {/* Account */}
          <div className="navbar-account" ref={dropdownRef}>

            <button
              className="navbar-menu-button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {displayName} ▾
            </button>

            {showDropdown && (
              <div className="account-dropdown">

                {!isLoggedIn ? (
                  <NavLink
                    to="/login"
                    className="dropdown-item"
                    onClick={() => setShowDropdown(false)}
                  >
                    Login
                  </NavLink>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="dropdown-item logout-button"
                  >
                    Logout
                  </button>
                )}

              </div>
            )}

          </div>

        </div>
      </div>
    </nav>
  );
}