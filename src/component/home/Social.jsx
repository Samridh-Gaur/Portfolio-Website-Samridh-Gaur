import React from "react";
// import {FaHackerrank} from "react-icons/fa";

const Social = () => {
    return (
        <div className="home_social">
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
    )
}

export default Social;     
