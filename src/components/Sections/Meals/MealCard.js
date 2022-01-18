import React from "react";

// Images
import mealOne from "../../../images/meals/meal-1.jpg";
import mealTwo from "../../../images/meals/meal-2.jpg";

// Icons
import { FlameOutline, RestaurantOutline, StarOutline } from "react-ionicons";

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
                <li className={styles.mealAttribute}>
                    <FlameOutline />
                    <span>650 calories</span>
                </li>
                <li className={styles.mealAttribute}>
                    <RestaurantOutline />
                    <span>NutriScore &reg; 74</span>
                </li>
                <li className={styles.mealAttribute}>
                    <StarOutline />
                    <span>4.9 rating (537)</span>
                </li>
            </ul>
        </div>
    );
};

export default MealCard;
