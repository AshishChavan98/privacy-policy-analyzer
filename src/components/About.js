import React from "react";
import NavBar from "../components/Navbar";
import '../css/testing.css'
import ReadabilityScore from './ReadabilityScore'
export default function About() {
  return (
    <div>
      <div className="container-fluid main-block-home">
        <div className="container-fluid heading-block">
          <div className="container-fluid">
            <NavBar />
            <div className="row content-block about-block">
              
                <div className="heading-text-block ">
                  <div className="heading-text ">
                    This Site helps creating awareness among user regarding privacy policy✨
                  </div>
                  
                  <div className="secondary-text">
                    A website to help user understand privacy policy
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
