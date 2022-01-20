import React from "react";

// Stylesheet
import styles from "./ListItem.module.css";

const ListItem = ({ children }) => {
    return <li className={styles.listItem}>{children}</li>;
};

export default ListItem;
