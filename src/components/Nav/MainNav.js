import React from "react";

// Styles
import styles from "./MainNav.module.css";

// Components
import Logo from "../UI/Logo";

const MainNav = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.mainNav}>
                <ul className={styles.mainNavList}>
                    <li className={styles.mainNavListItem}>
                        <a className={styles.mainNavLink} href="#">
                            Section 1
                        </a>
                    </li>
                    <li className={styles.mainNavListItem}>
                        <a className={styles.mainNavLink} href="#">
                            Section 2
                        </a>
                    </li>
                    <li className={styles.mainNavListItem}>
                        <a className={styles.mainNavLink} href="#">
                            Section 3
                        </a>
                    </li>
                    <li className={styles.mainNavListItem}>
                        <a className={styles.mainNavLink} href="#">
                            Section 4
                        </a>
                    </li>
                    <li className={styles.mainNavListItem}>
                        <a
                            className={`${styles.mainNavLink} ${styles.navCta}`}
                            href="#">
                            CTA
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNav;
