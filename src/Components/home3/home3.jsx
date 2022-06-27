import React from "react";
import Navbar from "../navbar/navbar";
import StatusBar from "../statusbar/statusbar";
import { useNavigate } from "react-router-dom";
import "./home.css";
import HandleBack from "../buttons/HandleBack";

const Home3 = () => {
  const Navigate = useNavigate();
  return (
    <>
      <StatusBar />
      <div className="container-fluid">
        <span className="body ">خانه من </span>
        <HandleBack  />
      </div>
      <button className="buttonChange ">تغییر نام خانه</button>

      <button onClick={() => Navigate("/home7")} className="button">
        مدیریت اتاق ها
      </button>
      <button className="footerbutton">اضافه کردن خانه جدید</button>

      <Navbar />
    </>
  );
};

export default Home3;
