import React from "react";
import { animateScroll as scroll } from "react-scroll";

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
        <button
            className={`${styles.btnLogo} ${className}`}
            onClick={scroll.scrollToTop}>
            <img src={logo} className={styles.logo} alt="Omnifood logo" />
        </button>
    );
};

export default Logo;
