import React from "react";
import StatusBar from "../home3/statusbar";
import "./home.css";
import Navbar from "./navbar";

const Home2 = () => {
  return (
    <>
      <StatusBar />
      <div className="container-fluid">
        <span className="body ">تنظیمات خانه</span>

        <img src="icons/add.png" className="mt-5 p-2 " alt="#" />
      </div>
      <button className="button">خانه ی من</button>
      <button className="footerbutton">اضافه کردن خانه جدید</button>

      <Navbar />
    </>
  );
};

export default Home2;
