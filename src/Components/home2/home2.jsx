import React from "react";
import AddingIcon from "../buttons/addingIcon";
import Navbar from "../navbar/navbar";
import StatusBar from "../statusbar/statusbar";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home2 = () => {
  const navigate = useNavigate();
  return (
    <>
      <StatusBar />
      <div className="container-fluid">
        <span className="body ">تنظیمات خانه</span>

       <AddingIcon/>
      </div>
      <button onClick={()=>navigate("/home3")} className="button">خانه ی من</button>
      <button className="footerbutton">اضافه کردن خانه جدید</button>

      <Navbar />
    </>
  );
};

export default Home2;
