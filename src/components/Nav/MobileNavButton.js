import React from "react";

// Stylesheets
import styles from "./MobileNavButton.module.css";

// Icons
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const MobileNavButton = () => {
    return (
        <button className={styles.btnMobileNav}>
            <IoMenuOutline size="4.8rem" />
            {/* <IoCloseOutline size="4.8rem" /> */}
        </button>
    );
};

export default MobileNavButton;
