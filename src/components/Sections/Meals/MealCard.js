import React from "react";

// Images
import mealOne from "../../../images/meals/meal-1.jpg";
import mealTwo from "../../../images/meals/meal-2.jpg";

// Stylesheets
import styles from "./MealCard.module.css";

const MealCard = () => {
    return (
        <div className={styles.meal}>
            <img
                className={styles.mealImage}
                src={mealOne}
                alt="Japanese Gyozas"
            />
            <span className={styles.tag}>Vegetartian</span>
            <p className={styles.mealTitle}>Japanese Gyozas</p>
            <ul className={styles.mealAttributeList}>
                <li className={styles.mealAttribute}>650 calories</li>
                <li className={styles.mealAttribute}>NutriScore &reg; 74</li>
                <li className={styles.mealAttribute}>4.9 rating (537)</li>
            </ul>
        </div>
    );
};

export default MealCard;
