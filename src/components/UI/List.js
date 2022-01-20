import React from "react";

// Stylesheet
import styles from "./List.module.css";

const List = ({ children }) => {
    return <ul className={styles.list}>{children}</ul>;
};

export default List;