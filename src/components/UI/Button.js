import React from "react";

// Stylesheet
import styles from "./Button.module.css";

/**
 * Create basic button styled html anchor
 *
 * @param {string} href - Value of href for anchor tag
 * @param {string} className - Add additional classes to style button
 * @param {string} text - Set text on button
 * @param {string} preStyle - Set pre-made styles ("full", "outline")
 * @return {jsx} If href is excluded a <button> HTML element will be returned instead of <a> tag
 */

const Button = ({ href, className, text, preStyle }) => {
    let buttonStyle;

    if (preStyle === "full") {
        buttonStyle = styles.btnFull;
    } else if (preStyle === "outline") {
        buttonStyle = styles.btnOutline;
    } else {
        buttonStyle = "";
    }

    return href ? (
        <a href={href} className={`${className} ${styles.btn} ${buttonStyle}`}>
            {text}
        </a>
    ) : (
        <button className={`${className} ${styles.btn} ${buttonStyle}`}>
            {text}
        </button>
    );
};

export default Button;
