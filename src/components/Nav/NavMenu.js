import React from "react";
import { Link } from "react-scroll";

// Stylesheets
import styles from "./NavMenu.module.css";

const NavMenu = ({ onClick, menuOpen }) => {
    return (
        <nav className={`${styles.mainNav} ${menuOpen ? styles.open : ""}`}>
            <ul className={styles.mainNavList}>
                <li>
                    <Link
                        to="howSection"
                        className={styles.mainNavLink}
                        offset={-30}
                        onClick={onClick}
                        smooth>
                        How It Works
                    </Link>
                </li>
                <li>
                    <Link
                        to="mealsSection"
                        className={styles.mainNavLink}
                        offset={-30}
                        onClick={onClick}
                        smooth>
                        Meals
                    </Link>
                </li>
                <li>
                    <Link
                        to="testimonialsSection"
                        className={styles.mainNavLink}
                        offset={-30}
                        onClick={onClick}
                        smooth>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <Link
                        to="pricingSection"
                        className={styles.mainNavLink}
                        offset={-30}
                        onClick={onClick}
                        smooth>
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link
                        to="ctaSection"
                        className={`${styles.mainNavLink} ${styles.navCta}`}
                        offset={-96}
                        onClick={onClick}
                        smooth>
                        Try free
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavMenu;
