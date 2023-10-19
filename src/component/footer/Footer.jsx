import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Samridh Gaur</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#education" className="footer_link">Education</a>
                    </li>
                </ul>

                <div className="footer_social">
                <a href="https://www.linkedin.com/in/samridhgaur/" className="home_social-icon" target="_blank">
            <i class="uil uil-linkedin"></i></a>   {/*icon import*/}
           
            <a href="https://twitter.com/Samridh_Gaur" className="home_social-icon" target="_blank">
            <i class="uil uil-twitter"></i>
            </a>
           
            <a href="https://www.instagram.com/samridhgaur/" className="home_social-icon" target="_blank">
            <i class="uil uil-instagram-alt"></i>
            </a>
           
            <a href="https://github.com/Samridh-Gaur" className="home_social-icon" target="_blank">
            <i class="uil uil-github"></i>
            </a>
                </div>

                <span className="footer_copy">&#169; Samridh Gaur</span>
            </div>
        </footer>
    )
}

export default Footer;