import "./AboutContentStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";
const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I love to create intuitive, fast and responsive interfaces while engineering robust backends that handle data efficiently and reliably. I love to combine modern frontend frameworks like React and Next.js with powerful backend technologies like Golang and Python to deliver end to end solutions. 
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent
