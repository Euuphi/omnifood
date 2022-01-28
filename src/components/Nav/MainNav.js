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

    // Function to handle click for MobileNavButton component
    const clickHandler = () => {
        // Reverse boolean value of menuOpen
        setMenuOpen((prevState) => {
            return !prevState;
        });
    };

    return (
        <header className={`${styles.header} ${isSticky && styles.sticky}`}>
            <Logo />
            {mobileNav ? (
                <>
                    <MobileNavButton
                        menuOpen={menuOpen}
                        onClick={clickHandler}
                    />
                    {menuOpen && <NavMenu onClick={clickHandler} />}
                </>
            ) : (
                <NavMenu onClick={clickHandler} />
            )}
        </header>
    );
};

export default MainNav;
