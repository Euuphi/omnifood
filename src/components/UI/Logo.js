import React from "react";

// Images
import logo from "../../images/omnifood-logo.png";

// Stylesheets
import styles from "./Logo.module.css";

/**
 * Omnifood Logo
 *
 * @param {string} className - Add additional className for styling
 * @return {*}
 */

const Logo = ({ className }) => {
    return (
        <a className={className} href="#">
            <img src={logo} className={styles.logo} alt="Omnifood logo" />
        </a>
    );
};

export default Logo;
