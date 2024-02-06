import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";  // 修改R
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import MainPage from "./Nevigation/mainPage/MainPage";
import Upload from "./Components/Upload/Upload";
import Viewupload from "./Components/Upload/Viewupload";
import Bin from "./Components/Upload/Bin";
import IMGtoIMG from "./StableDiffusion/img2img/IMGtoIMG";
import TXTtoIMG from "./StableDiffusion/txt2txt/TXTtoIMG";
import Download2 from "./Components/Download2/Download";
import CatchTXT from "./StableDiffusion/CatchTXT/CatchTXT";
import Catchimg from "./StableDiffusion/CatchIMG/Catchimg";
import Project  from "./Nevigation/ProjectPage/Project";
import CreatePage from "./Nevigation/CreatePage/Create";
import Step from "./Nevigation/Step1/Step";
// import ImageEditor from "./Components/ImageEditor/ImageEditor";

import Requirement from "./Nevigation/Requirment/Requirment";
function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Register/>}></Route>
          <Route path="/MainPage" element={<MainPage/>}></Route>
          <Route path="/login" element={<Login setUserState={setUserState} />}></Route>
          <Route path="/Upload" element={<Upload/>}></Route>
          <Route path="/Bin" element={<Bin/>}></Route>
          <Route path="/Download2" element={<Download2/>}></Route>
          <Route path="/Viewupload" element={<Viewupload/>}></Route>
          <Route path="/TXTtoIMG" element={<TXTtoIMG/>}></Route>
          <Route path="/IMGtoIMG" element={<IMGtoIMG/>}></Route>
          <Route path="/CatchTXT" element={<CatchTXT/>}></Route>
          <Route path="/Catchimg" element={<Catchimg/>}></Route>
          <Route path="/Project" element={<Project/>}></Route>
          <Route path="/Requirment" element={<Requirement/>}></Route>
          <Route path="/Step" element={<Step/>}></Route>
          <Route path="/CreatePage" element={<CreatePage/>}></Route>
          {/* <Route path="/ImageEditor" element={<ImageEditor/>}></Route> */}
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
