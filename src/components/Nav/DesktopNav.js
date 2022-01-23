import React from "react";

// Stylesheets
import styles from "./DesktopNav.module.css";

const DesktopNav = () => {
    return (
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
                    <a className={styles.mainNavLink} href="#pricingSection">
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
    );
};

export default DesktopNav;
