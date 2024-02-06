import React from "react";
import { NavLink } from "react-router-dom";
import Mainstyle from "./MainPage.module.css";
import { useLocation } from 'react-router-dom';

function MainPage(){
    const location = useLocation();
    const userid = location.state;
    return(
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}> 
        <div className={Mainstyle.login}>
            <h1>Upload and Download</h1>
            <div style ={{position:'relative'}}>
                Provide the function of uploading images and downloading images
            </div>
            <span style ={{position:'relative',top:"60px",right:'80px'}}>
                <NavLink to={`/Upload?id=${userid}`}> upload image</NavLink>
            </span>
            <br/>
            <span style ={{position:'relative',top:"60px",right:'80px'}}>
                <NavLink to={`/Download2?id=${userid}`}> download image</NavLink>
            </span>
        </div>
        <div className={Mainstyle.login}>
            <h1> SD Components</h1>
            <div style ={{position:'relative',right:'7px'}}>Providing the finction of SD Components</div>
            <span style ={{position:'relative',top:'60px',right:'0px'}}>
                <NavLink to={`/TXTtoIMG?id=${userid}`}>TXT to IMG</NavLink>
                <br/>
                <NavLink to="/CatchTXT">TXT2TXT img</NavLink>
            </span>
            <br/>
            <span style ={{position:'relative',top:'100px',right:'0px'}}>
                <NavLink to={`/IMGtoIMG?id=${userid}`}>IMG to IMG</NavLink>
                <br/>
                <NavLink to="/Catchimg">IMG2IMG img</NavLink>
            </span>
        </div>   
<div>{/*---------------------------------------------------------------------------------------------------------------------------*/}</div>
         </div>
    );
}

export default MainPage;