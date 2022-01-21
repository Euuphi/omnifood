import React from "react";

// Stylesheet
import styles from "./Feature.module.css";

/**
 * Create element with icon and feature text
 *
 * @param {jsx} icon - JSX of icon for feature
 * @param {string} title - Feature title text
 * @param {string} text - Feature description text
 * @return {*}
 */

const Feature = ({ icon, title, text }) => {
    return (
        <div className={styles.feature}>
            {icon}
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default Feature;
