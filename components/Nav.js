import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-5"
      style={{ height: "80px" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fs-2" href="#">
          DroidTech
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="ms-auto">
            <li className="nav-item d-inline-block px-3 fs-4 text-warning">
              <Link href="/">Home</Link>
            </li>
            <li className="nav-item d-inline-block px-3 fs-4 text-warning">
              <Link href="/about">About</Link>
            </li>
            <li className="nav-item d-inline-block px-3 fs-4 text-warning">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
