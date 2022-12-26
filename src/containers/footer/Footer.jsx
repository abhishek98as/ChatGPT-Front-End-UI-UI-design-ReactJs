import React from 'react'
import "./footer.css"
import logoUrl from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
         Get access the AI tool developed by OPEN.AI?
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logoUrl} alt="gpt3 logo" />
          <p>All right reserved @2023 Developed by Abhishek Singh</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Alpha-2 Greater Noida, UP</p>
          <p>+917068482741</p>
          <p>abhishek98as@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyrights">
        ©2023 ChatGPT. All rights reserved.
      </div>
    </div>
  )
}

export default Footer