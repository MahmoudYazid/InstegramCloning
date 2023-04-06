import React from 'react'
import './leftside.css'
import screenshot from "../img/img/screenshot2.png";
import screenshot2 from "../img/img/screenshot3.png";
import othermobile from '../img/img/othermobile.png'
export  function Leftside() {
  return (
    <div className="left">
      <img src={othermobile} alt="pic" className="othermobile"></img>
      <img src={screenshot} alt="pic" className="screenshot"></img>
      <img src={othermobile} alt="pic" className="BackendMobile"></img>
      <img src={screenshot2} alt="pic" className="screenshot2"></img>
    </div>
  );
}
