import React from "react";

// Stylesheet
import styles from "./ListItem.module.css";

/**
 * Styled <li> HTML element with basic
 *
 * @param {string} text - Text to display
 * @param {jsx} icon - JSX of icon to display
 * @return {*}
 */

const ListItem = ({ text, icon }) => {
    return (
        <li className={styles.listItem}>
            {icon}
            <span>{text}</span>
        </li>
    );
};

export default ListItem;
