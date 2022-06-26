import Navbar from "./navbar";
import StatusBar from "./statusbar";
import "./home7.css";
const Home7 = () => {
  return (
    <>
      <StatusBar />
      <div className="container-fluid">
        <span className="body">مدیریت اتاق ها </span>

        <img src="icons/arrow.png" className="mt-5 p-2 " />
      </div>
      <button className=" bedroom">
        <img src="icons/bedroom.png" />
        اتاق خواب
      </button>
      <button className="bathroom">
        <img src="icons/bathroom.png" />
        سرویس بهداشتی
      </button>

      <button className="livingRoom">
        {" "}
        <img src="icons/livingroom.png" />
        اتاق پذیرایی
      </button>
      <button className="kitchen">
        {" "}
        <img src="icons/kitchen.png" />
        آشپزخانه
      </button>
      <div className="row">
        <button className="addingRoom ">اضافه کردن خانه اتاق</button>
        <button className="deletingRoom">حذف اتاق</button>
      </div>

      <Navbar />
    </>
  );
};

export default Home7;
