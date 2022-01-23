import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

// Styles
import styles from "./MainNav.module.css";

// Components
import Logo from "../UI/Logo";
import MobileNavButton from "./MobileNavButton";
import DesktopNav from "./DesktopNav";

const MainNav = () => {
    const smallTabletScreen = useMediaQuery("(max-width: 59em");
    const [mobileNav, setMobileNav] = useState(smallTabletScreen);

    useEffect(() => {
        setMobileNav(smallTabletScreen);
    }, [smallTabletScreen]);

    return (
        <header className={styles.header}>
            <Logo />
            {mobileNav || <DesktopNav />}
            {mobileNav && <MobileNavButton />}
        </header>
    );
};

export default MainNav;
