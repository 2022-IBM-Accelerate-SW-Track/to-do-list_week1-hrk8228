import "./About.css";
import profpic from "../assets/profpic.jpg";
import React, { Component } from 'react';
  
export default class About extends Component {
  render() {
    return (
      // <div>
      //   <p>Design your About me page </p> 
      // </div>
      
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profpic}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Harini Kumar</div>
            <div className="brief_description">
              I like to read <br></br>
              I like to draw <br></br>
            </div>
          </div>
        </div>
      </div>
    )
  }
}