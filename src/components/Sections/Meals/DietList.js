import React from "react";

// Stylesheets
import styles from "./DietList.module.css";

// Components
import HeadingTetiary from "../../Headings/HeadingTertiary";
import DietListItem from "./DietListItem";

const DietList = () => {
    const dietList = [
        "Vegetarian",
        "Vegan",
        "Pescatarian",
        "Gluten-free",
        "Lactose-free",
        "Keto",
        "Paleo",
        "Low FODMAP",
        "Kid-friendly",
    ];

    return (
        <div className={styles.diet}>
            <HeadingTetiary>Works with any diet</HeadingTetiary>
            <ul className={styles.list}>
                {dietList.map((diet) => {
                    return <DietListItem dietName={diet} key={diet} />;
                })}
            </ul>
        </div>
    );
};

export default DietList;
