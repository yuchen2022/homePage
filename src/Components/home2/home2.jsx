import React from "react";
import AddingIcon from "../buttons/addingIcon";
import Navbar from "../navbar/navbar";
import StatusBar from "../statusbar/statusbar";
import "./home.css";


const Home2 = () => {
  return (
    <>
      <StatusBar />
      <div className="container-fluid">
        <span className="body ">تنظیمات خانه</span>

       <AddingIcon/>
      </div>
      <button className="button">خانه ی من</button>
      <button className="footerbutton">اضافه کردن خانه جدید</button>

      <Navbar />
    </>
  );
};

export default Home2;
