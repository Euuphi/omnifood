import React from "react";

// Icons
import { IoCheckmarkOutline } from "react-icons/io5";

// Stylesheets
import styles from "./DietListItem.module.css";

const DietListItem = ({ dietName }) => {
    const colorPrimary = "#e67e22";

    return (
        <li className={styles.listItem}>
            <IoCheckmarkOutline color={colorPrimary} size="3rem" />
            <span>{dietName}</span>
        </li>
    );
};

export default DietListItem;
