import React from "react";

// Stylesheets
import styles from "./Headings.module.css";

const HeadingTertiary = ({ children }) => {
    return <h3 className={styles.headingTertiary}>{children}</h3>;
};

export default HeadingTertiary;
