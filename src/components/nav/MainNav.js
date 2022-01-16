import React from "react";

import logo from "../../images/omnifood-logo.png";

import styles from "./MainNav.module.css";

const MainNav = () => {
    return (
        <header class={styles.header}>
            <img src={logo} class={styles.logo} alt="Omnifood logo" />
            <nav class={styles.mainNav}>Nav</nav>
        </header>
    );
};

export default MainNav;
