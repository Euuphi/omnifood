import React from "react";

// Stylesheets
import styles from "./Headings.module.css";

const Subheading = ({ children }) => {
    return <span className={styles.subheading}>{children}</span>;
};

export default Subheading;
