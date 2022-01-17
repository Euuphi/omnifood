import React from "react";

import styles from "./Headings.module.css";

const HeadingSecondary = ({ children }) => {
    return <h2 className={styles.headingSecondary}>{children}</h2>;
};

export default HeadingSecondary;
