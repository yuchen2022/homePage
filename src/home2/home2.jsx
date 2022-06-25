import React from "react";
import StatusBar from "./components/statusbar";
import "./home2.css";

const Home2 = () => {
  return (
    <>
      <div className="container-fluid">
        <StatusBar />
        <div className="container-fluid">
          <row className="body">
            <i
              className="fa-solid fa-plus col-sm-1 h1 "
              style={{
                color: "#507E74",
                backgroundColor:"blue"
              }}
            ></i>
            <div className="col-sm-1"></div>
            <span className=" m-2 p-2  bg-primary col-sm-6">تنظیمات خانه</span>
          </row>
        </div>
      </div>
    </>
  );
};

export default Home2;
