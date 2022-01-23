import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

// Styles
import styles from "./MainNav.module.css";

// Components
import Logo from "../UI/Logo";
import MobileNavButton from "./MobileNavButton";
import NavMenu from "./NavMenu";

const MainNav = () => {
    // Media Queries
    const smallTabletScreen = useMediaQuery("(max-width: 59em");

    // States
    const [mobileNav, setMobileNav] = useState(smallTabletScreen);
    const [menuOpen, setMenuOpen] = useState(false);

    // Effect to set initial nav state
    useEffect(() => {
        setMobileNav(smallTabletScreen);
    }, [smallTabletScreen]);

    // Function to handle click for MobileNavButton component
    const clickHandler = () => {
        // Reverse boolean value of menuOpen
        setMenuOpen((prevState) => {
            return !prevState;
        });
    };

    return (
        <header className={styles.header}>
            <Logo />
            {mobileNav || <NavMenu />}
            {mobileNav && (
                <MobileNavButton menuOpen={menuOpen} onClick={clickHandler} />
            )}
        </header>
    );
};

export default MainNav;
