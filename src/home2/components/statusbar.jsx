import React from "react";

const StatusBar = () => {
  return (
    <div className="statusbar row  ">
      <span className="m-2 col-sm-2 h6 ">5:13PM</span>
      <div className="col-sm-4"></div>
      <i className="fa-solid fa-clock col-sm-1  p-1 mt-2 "></i>
      <i className="fa-brands fa-bluetooth-b h5 col-sm-1 p-1 mt-1"></i>
      <i className="fa-solid fa-wifi col-sm-1 p-1 mt-2"></i>
      <i className="fa-solid fa-signal  col-sm-1 p-1 mt-2"></i>
      <i className="fa-solid fa-battery-half col-sm-1 p-1 mt-2"></i>
    </div>
  );
};

export default StatusBar;
