import React from "react";
import "./header.css";
import offers from "../../assets/offers.png";
import Login from "../login/Login";
import Home from "../home/Home";
import SignUp from "../signUp/SignUp";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  مصر
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      الامارات
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      السعوديه
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      كينيا
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      نيجيريا
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/">
                  الرئيسيه
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/signUp">
                  اشتراك
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/login">
                  دخول
                </a>
              </li>

              <li className="nav-item">
                <a to="/products">
                  <img src={offers} alt="" className="offer" />
                </a>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <button className="btn btn-outline-danger w-100" type="submit">
              ابحث عن منتجك
            </button>
            <input
              className="form-control me-2 bg-light"
              type="search"
              placeholder="ابدأ البحث"
              aria-label="Search"
            />
          </form>
          <a className="navbar-brand" to="/">
            اسعار اليوم
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
