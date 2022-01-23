import React, { useState } from "react";

// Stylesheets
import styles from "./MobileNavButton.module.css";

// Icons
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const MobileNavButton = ({ onClick, menuOpen }) => {
    return (
        <button className={styles.btnMobileNav} onClick={onClick}>
            {menuOpen ? (
                <IoCloseOutline size="4.8rem" />
            ) : (
                <IoMenuOutline size="4.8rem" />
            )}
        </button>
    );
};

export default MobileNavButton;
