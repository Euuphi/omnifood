import React from "react";

import styles from "./HeadingPrimary.module.css";

const HeadingPrimary = ({ text }) => {
    return <h1 className={styles.headingPrimary}>{text}</h1>;
};

export default HeadingPrimary;
