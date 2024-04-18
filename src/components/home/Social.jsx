import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://twitter.com/sohailmd88301" className="home__social-icon" target="_blank">
                <FiTwitter />
            </a>
            <a href="https://github.com/Sohail7861" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/sohail-mohammad-6ba18921b/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;