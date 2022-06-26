import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <ul className="mb-2">
        <li className="nav-itemp-2">
          <img src="icons/home.png" className="icon" alt="#" />
          <a
            className="nav-link text-light p-3 mt-1 active"
            data-bs-toggle="pill"
            href="#home"
          >
            خانه
          </a>
        </li>
        <li className="nav-link p-1 active">
          <img src="icons/devices.png" className="icon" alt="#" />
          <a
            className="nav-link active text-light mt-1 p-1"
            data-bs-toggle="pill"
            href="#devices"
          >
            دستگاهها
          </a>
        </li>
        <li className="nav-itemactive  ">
          <img src="icons/union.png" className="icon" alt="#" />
          <a
            className="nav-link text-light active p-1 "
            data-bs-toggle="pill"
            href="#uion"
          >
            اتوماسیون
          </a>
        </li>
        <li className="nav-item ">
          <img src="icons/account.png" className="icon" alt="#" />
          <a
            className="nav-link active  text-light p-1 "
            data-bs-toggle="pill"
            href="#acount"
          >
            حسابکاربری
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
<></>;
