import React from "react";

// Icons
import { CheckmarkOutline } from "react-ionicons";

// Stylesheets
import styles from "./DietList.module.css";

// Components
import HeadingTetiary from "../../Headings/HeadingTertiary";

const DietList = () => {
    const colorPrimary = "#e67e22";
    return (
        <div className={styles.diet}>
            <HeadingTetiary>Works with any diet</HeadingTetiary>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <CheckmarkOutline
                        color={colorPrimary}
                        height="3rem"
                        width="3rem"
                    />
                    <span>Vegetarian</span>
                </li>
                <li className={styles.listItem}>
                    <CheckmarkOutline
                        color={colorPrimary}
                        height="3rem"
                        width="3rem"
                    />
                    <span>Vegan</span>
                </li>
                <li className={styles.listItem}>
                    <CheckmarkOutline
                        color={colorPrimary}
                        height="3rem"
                        width="3rem"
                    />
                    <span>Pescatarian</span>
                </li>
                <li className={styles.listItem}>
                    <CheckmarkOutline
                        color={colorPrimary}
                        height="3rem"
                        width="3rem"
                    />
                    <span>Gluten-free</span>
                </li>
                <li className={styles.listItem}>
                    <CheckmarkOutline
                        color={colorPrimary}
                        height="3rem"
                        width="3rem"
                    />
                    <span>Lactose-free</span>
                </li>
                <li className={styles.listItem}>
                    <CheckmarkOutline
                        color={colorPrimary}
                        height="3rem"
                        width="3rem"
                    />
                    <span>Keto</span>
                </li>
                <li className={styles.listItem}>
                    <CheckmarkOutline
                        color={colorPrimary}
                        height="3rem"
                        width="3rem"
                    />
                    <span>Paleo</span>
                </li>
                <li className={styles.listItem}>
                    <CheckmarkOutline
                        color={colorPrimary}
                        height="3rem"
                        width="3rem"
                    />
                    <span>Low FODMAP</span>
                </li>
                <li className={styles.listItem}>
                    <CheckmarkOutline
                        color={colorPrimary}
                        height="3rem"
                        width="3rem"
                    />
                    <span>Kid-friendly</span>
                </li>
            </ul>
        </div>
    );
};

export default DietList;
