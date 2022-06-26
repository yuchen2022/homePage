import React from "react";

const StatusBar = () => {
  return (
    <div className="statusbar nav ">
      <span className="m-2 col-sm-2 h6 ">5:13PM</span>
      <div className="col-sm-5"></div>
      <div className="col-sm-4 m-1 ">
        <img className=" p-1" src="icons/clock.png" />
        <img className=" p-1" src="icons/bluetooth.png" />
        <img className=" p-1" src="icons/Wifi.png" />
        <img className="p-1" src="icons/Signal.png" />
        <img className="p-1" src="icons/Battery.png" />
      </div>
    </div>
  );
};

export default StatusBar;
