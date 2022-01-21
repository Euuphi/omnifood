import React from "react";

// Images
import logo from "../../images/omnifood-logo.png";

// Stylesheets
import styles from "./Logo.module.css";

const Logo = () => {
    return <img src={logo} className={styles.logo} alt="Omnifood logo" />;
};

export default Logo;
