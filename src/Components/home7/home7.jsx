import React from "react";
import Addingroom from "../buttons/addingroom";
import ArrowIcon from "../buttons/arrowIcon";
import Bathroom from "../buttons/bathroom";
import Bedroom from "../buttons/bedroom";
import Deletingroom from "../buttons/detetingroom";
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

        <ArrowIcon />
      </div>
      <Bedroom />
      <Bathroom />
      <Livingroom />
      <Kitchen />
      <div className="row">
        <Addingroom />
        <Deletingroom />
      </div>

      <Navbar />
    </>
  );
};

export default Home7;
