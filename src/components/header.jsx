import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [useBudget, SetUseBudget] = useState(true);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand ms-3" to="/">
          Store Name
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/Products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/About-us">
                About Us
              </NavLink>
            </li>
          </ul>
          <div className="navbar-nav ms-3">
            <button
              className={`nav-item btn ${useBudget ? 'btn-primary' : 'btn-danger'}`}
              onClick={() => SetUseBudget(!useBudget)}
            >
              {useBudget
                ? 'Attiva modalità budget'
                : 'Disattiva modalità budget'}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

/*
      <header className="bg-light mb-3 p-3 d-flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/About-us">About Us</NavLink>
      </header>*/
