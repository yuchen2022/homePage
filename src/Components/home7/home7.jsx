import React from "react";
import HandleBack from "../buttons/HandleBack";
import Bathroom from "../buttons/bathroom";
import Bedroom from "../buttons/bedroom";
import Kitchen from "../buttons/kitchen";
import Livingroom from "../buttons/livingroom";
import Navbar from "../navbar/navbar";
import StatusBar from "../statusbar/statusbar";
import "./home7.css";

const Home7 = () => {
  return (
    <>
      <StatusBar />
      <div className="container-fluid">
        <span className="body">مدیریت اتاق ها </span>

        <HandleBack />
      </div>
      <Bedroom />
      <Bathroom />
      <Livingroom />
      <Kitchen />
      <div className="row">
        
      </div>

      <Navbar />
    </>
  );
};

export default Home7;
