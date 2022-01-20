import React from "react";

// Stylesheet
import styles from "./Button.module.css";

/**
 * Create basic button styled html anchor
 *
 * @param {string} href - Value of href for anchor tag
 * @param {string} className - Add additional classes to style button
 * @param {*} text - Set text on button
 * @param {boolean} outline - Set true for outline style
 * @return {*}
 */

const Button = ({ href, className, text, outline }) => {
    let buttonStyle;

    if (outline) {
        buttonStyle = styles.btnOutline;
    } else {
        buttonStyle = styles.btnFull;
    }

    return (
        <a href={href} className={`${className} ${styles.btn} ${buttonStyle}`}>
            {text}
        </a>
    );
};

Button.defaultProps = {
    href: "#",
};

export default Button;
