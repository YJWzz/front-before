import React from 'react';
import './Step.css';
import logo from "../../image/instai_icon.png";
import { NavLink } from 'react-router-dom';
// 每一個user 的download2 需要注意甚麼 後端是否會分配userid的網址? 
function Step() {
  return (
    <div className="app">
      <header className="nav">
          <img src={logo} className='logo' alt="Your Logo" />
        <div className="allProjects">
          <div style={{ position: "relative", left: "250px", fontWeight: "bold" }}>All Projects</div>
        </div>
        <div className="stepRectangle"></div>
      </header>
      
      <header className="subNav">
        Traffic cone ...
      </header>

      <div className="circles">
        <div className="circleNo1"></div>
        <div className="circleNo2"></div>
        <div className="circleNo3"></div>
        <div className="circleNo4"></div>
        <div className="circleNo5"></div>
      </div>

      <nav className="secondNav">
        <ul>
          <li>Steps</li>
          <li>1.Upload training data</li>
          <li>2.Provide your model training requirements</li>
          <li>3.Confirm data and requirements</li>
          <li>4.Train your AI model</li>
          <li>5.Download AI model</li>
        </ul>
      </nav>

      <div className="frame1">
        <ul>
          <li>Upload training data</li>
          <li>Upload the image data you wish to use to train your style model</li>
        </ul>
        <NavLink to='/Download2'><button className="upload-buttonNo1">Upload</button></NavLink>
      </div>

      <div className="frameNo2 ">
        <ul>
          <li>Provide your training requirements</li>
          <li>Tell us your specific needs for AI model training</li>
        </ul>
        <NavLink to="/Requirment"><button className="upload-buttonNo2" >Fill out the form</button></NavLink>
      </div>

      <div className="frameNo3">
        <ul>
          <li>Confirm data and requirements</li>
          <li>Tell your needs for AI model training</li>
        </ul>
        <button className="upload-buttonNo3">Confirm data</button>
        <button className="upload-buttonNo4">Confirm requirements</button>
      </div>

      <div className="frameNo4">
        <ul>
          <li>Training your AI model</li>
          <li>You haven't submitted data yet</li>
        </ul>
      </div>

      <div className="frameNo5">
        <ul>
          <li>Download AI model</li>
          <li>No model available for download</li>
        </ul>
      </div>
    </div>
  );
}

export default Step;
