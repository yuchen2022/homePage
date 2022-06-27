import React from "react";
import Navbar from "../navbar/navbar";
import StatusBar from "../statusbar/statusbar";

import "./home.css";

const Home3 = () => {
  return (
    <>
      <StatusBar />
      <div className="container-fluid">
        <span className="body ">خانه من </span>

        <img src="icons/arrow.png" className="mt-5 p-2 " alt="#"/>
      </div>
      <button className="buttonChange ">تغییر نام خانه</button>
      
      <button className="button">مدیریت اتاق ها</button>
      <button className="footerbutton" >اضافه کردن خانه جدید</button>

      <Navbar />
    </>
  );
};

export default Home3;
