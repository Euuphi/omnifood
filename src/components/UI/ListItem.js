import React from "react";

// Icons
import { IoCheckmarkOutline } from "react-icons/io5";

// Stylesheet
import styles from "./ListItem.module.css";

const ListItem = ({ icon, text }) => {
    const colorPrimary = "#e67e22";

    return (
        <li className={styles.listItem}>
            {icon && <IoCheckmarkOutline color={colorPrimary} size="3rem" />}
            <span>{text}</span>
        </li>
    );
};

export default ListItem;
