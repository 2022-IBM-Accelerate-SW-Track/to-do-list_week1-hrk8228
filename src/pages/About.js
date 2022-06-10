import React, { Component } from 'react';
import "./About.css";
import profpic from "../assets/profpic.jpg";

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
              <p>
                Hi! My name is Harini Kumar, and I am from Dallas, TX. I am a rising sophomore at Texas A&M University 
                pursuing a major in Computer Science. In my free time, I enjoy drawing, playing with my dog, and spending time with friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}