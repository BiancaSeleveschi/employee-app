import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li class="nav-item">
                <Link to="/" className="text-decoration-none m-2 text-black">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="employee-form"
                  className="text-decoration-none m-2 text-black"
                >
                  Employee Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
