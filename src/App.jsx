import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home2 from "./Components/home2/home2";
import "./App.css";
import Home3 from "./Components/home3/home3";
import Home7 from "./Components/home7/home7";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Home2 />
              </>
            }
          ></Route>
          <Route
            index
            path="/home3"
            element={
              <>
                <Home3 />
              </>
            }
          ></Route>
          <Route
            index
            path="/home7"
            element={
              <>
                <Home7 />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
