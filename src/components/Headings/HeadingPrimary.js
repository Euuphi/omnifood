import React from "react";

// Stylesheets
import styles from "./Headings.module.css";

const HeadingPrimary = ({ children }) => {
    return <h1 className={styles.headingPrimary}>{children}</h1>;
};

export default HeadingPrimary;
