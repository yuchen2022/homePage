import { useNavigate } from "react-router-dom";

const HandleBack = (props) => {
  const Navigate = useNavigate();
  return (
    <button className="border-0" style={{backgroundColor:"transparent"}} onClick={()=> Navigate(-1)}>
      <img src="icons/arrow.png" className="mt-5 p-2 " />
    </button>
  );
};

export default HandleBack;
