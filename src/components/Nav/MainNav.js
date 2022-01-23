import React, { useEffect } from "react";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

// Styles
import styles from "./MainNav.module.css";

// Components
import Logo from "../UI/Logo";
import MobileNavButton from "./MobileNavButton";

const MainNav = () => {
    const smallTabletScreen = useMediaQuery("(max-width: 59em");
    const [mobileNav, setMobileNav] = useState(smallTabletScreen);

    useEffect(() => {
        setMobileNav(smallTabletScreen);
    }, [smallTabletScreen]);

    return (
        <header className={styles.header}>
            <Logo />
            {mobileNav || (
                <nav className={styles.mainNav}>
                    <ul className={styles.mainNavList}>
                        <li className={styles.mainNavListItem}>
                            <a
                                className={styles.mainNavLink}
                                href="#howSection">
                                How It Works
                            </a>
                        </li>
                        <li className={styles.mainNavListItem}>
                            <a
                                className={styles.mainNavLink}
                                href="#mealsSection">
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
            )}
            {mobileNav && <MobileNavButton />}
        </header>
    );
};

export default MainNav;
