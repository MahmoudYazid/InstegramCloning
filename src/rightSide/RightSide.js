import React from 'react'
import './RideSide.css'
import logo from '../img/-11590321548vfiwckfjs3.png'
import {AiFillFacebook} from 'react-icons/ai'
import { FaGooglePlay } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
export  function RightSide() {
  return (
    <div className="right">

      
      <div className="LoginContainer">
        <img src={logo} alt="pic" className="Logo"></img>
        <input
          type="text"
          className="inputTextName"
          placeholder="Phone number , username, email"
        ></input>
        <input
          type="text"
          className="passwordText"
          placeholder="password"
        ></input>
        <div className="Loginbtm">
          <p>Login</p>
        </div>
        <hr className="hr"></hr>
        <p className="or">OR</p>
        <div className="DivFacebook">
          <AiFillFacebook className="facebooklogo"></AiFillFacebook>
          <p>Login With Facebook</p>
        </div>
        <p className="ForgetPassword">Forget Password?</p>
      </div>


      <div className="part2">
        <p>
          Don't have an account? <p className="signuptext">Sign up</p>
        </p>
      </div>


      <div className="Gettheapp">
        <p>Get the app.</p>
      </div>


      <div className="SocialMediaBtmsDiv">
        <div className="GoogleplayDev">
          <FaGooglePlay className="FaGooglePlay"></FaGooglePlay>
          <p>
            <span className="span1">Get it on</span> <br></br>
            <span className="span2">Google play</span>
          </p>
        </div>


        <div className="MicrosoftDev">
          <BsMicrosoft className="FaGooglePlay"></BsMicrosoft>
          <p>
            <span className="span1">Get it on</span> <br></br>
            <span className="span2">Microsoft</span>
          </p>
        </div>
      </div>
    </div>
  );
}
