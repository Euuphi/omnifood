import React from "react";

// Images
import logo from "../../images/omnifood-logo.png";

// Stylesheets
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <a href="#">
            <img src={logo} className={styles.logo} alt="Omnifood logo" />
        </a>
    );
};

export default Logo;
