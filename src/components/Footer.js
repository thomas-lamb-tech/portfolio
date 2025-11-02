import "./FooterStyles.css"

import React from 'react';
import {FaPhone, FaMailBulk} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            44-7893-951814</h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            thomas.lamb.tech@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>This is me Thomas Lamb & Founder of innovative coding.I enjoy discussing new projects and design challanges.</p>
                    <div className="social">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
