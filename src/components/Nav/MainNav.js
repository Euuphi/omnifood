import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

// Styles
import styles from "./MainNav.module.css";

// Components
import Logo from "../UI/Logo";
import NavMenu from "./NavMenu";
import MobileNavButton from "./MobileNavButton";

/**
 * Create main header element
 *
 * @param {boolean} isSticky - Specify if nav will stick to viewport
 * @return {*}
 */

const MainNav = ({ isSticky }) => {
    // Media Queries
    const smallTabletScreen = useMediaQuery("(max-width: 59em)");

    // States
    const [mobileNav, setMobileNav] = useState(smallTabletScreen);
    const [menuOpen, setMenuOpen] = useState(false);

    // Effect to set initial nav state
    useEffect(() => {
        setMobileNav(smallTabletScreen);
        setMenuOpen(false);
    }, [smallTabletScreen]);

    // Effect to add scroll event listener when component is first loaded
    useEffect(() => {
        window.addEventListener("scroll", () => {
            // Close mobile navigation menu when scroll is detected
            setMenuOpen(false);
        });
    }, []);

    // Function to handle click for MobileNavButton component
    const clickHandler = () => {
        // Reverse boolean value of menuOpen
        setMenuOpen((prevState) => {
            return !prevState;
        });
    };

    return (
        <header
            className={`${styles.header} ${
                (isSticky || menuOpen) && styles.sticky
            }`}>
            <Logo />
            {mobileNav ? (
                <>
                    <MobileNavButton
                        menuOpen={menuOpen}
                        onClick={clickHandler}
                    />
                    <NavMenu menuOpen={menuOpen} onClick={clickHandler} />
                </>
            ) : (
                <NavMenu menuOpen={menuOpen} onClick={clickHandler} />
            )}
        </header>
    );
};

export default MainNav;
