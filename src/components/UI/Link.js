import React from "react";

// Stylesheets
import styles from "./Link.module.css";

const Link = ({ children, href }) => {
    return (
        <a className={styles.link} href={href}>
            {children}
        </a>
    );
};

Link.defaultProps = {
    href: "#",
};

export default Link;
