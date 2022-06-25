import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home2 from "./home2/home2";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
