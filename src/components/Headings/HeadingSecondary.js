import React from "react";

// Stylesheets
import styles from "./Headings.module.css";

/**
 * Create basic secondary heading
 *
 * @param {string} className - Add additoinal classes for styling
 * @return {*}
 */

const HeadingSecondary = ({ children, className }) => {
    return (
        <h2 className={`${styles.headingSecondary} ${className}`}>
            {children}
        </h2>
    );
};

export default HeadingSecondary;
