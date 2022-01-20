import React from "react";

// Stylesheet
import styles from "./List.module.css";

/**
 * Create styled <ul> HTML element
 *
 * @param {*} className - Add additional classes for styling
 * @return {*}
 */

const List = ({ children, className }) => {
    return <ul className={`${styles.list} ${className}`}>{children}</ul>;
};

export default List;
