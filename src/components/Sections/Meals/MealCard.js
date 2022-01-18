import React from "react";

// Images
import mealOne from "../../../images/meals/meal-1.jpg";
import mealTwo from "../../../images/meals/meal-2.jpg";

// Icons
import { FlameOutline, RestaurantOutline, StarOutline } from "react-ionicons";

// Stylesheets
import styles from "./MealCard.module.css";

const MealCard = () => {
    const colorPrimary = "#e67e22";

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
                    <FlameOutline color={colorPrimary} height="2.4rem" />
                    <span>
                        <strong>650</strong> calories
                    </span>
                </li>
                <li className={styles.mealAttribute}>
                    <RestaurantOutline color={colorPrimary} height="2.4rem" />
                    <span>
                        NutriScore &reg; <strong>74</strong>
                    </span>
                </li>
                <li className={styles.mealAttribute}>
                    <StarOutline color={colorPrimary} height="2.4rem" />
                    <span>
                        <strong>4.9</strong> rating (537)
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default MealCard;
