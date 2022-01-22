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
                        <a className={styles.mainNavLink} href="#howSection">
                            How It Works
                        </a>
                    </li>
                    <li className={styles.mainNavListItem}>
                        <a className={styles.mainNavLink} href="#mealsSection">
                            Meals
                        </a>
                    </li>
                    <li className={styles.mainNavListItem}>
                        <a
                            className={styles.mainNavLink}
                            href="#testimonialsSection">
                            Testimonials
                        </a>
                    </li>
                    <li className={styles.mainNavListItem}>
                        <a
                            className={styles.mainNavLink}
                            href="#pricingSection">
                            Pricing
                        </a>
                    </li>
                    <li className={styles.mainNavListItem}>
                        <a
                            className={`${styles.mainNavLink} ${styles.navCta}`}
                            href="#ctaSection">
                            Try for free
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNav;
