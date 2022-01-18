import React from "react";

// Images
import mealOne from "../../../images/meals/meal-1.jpg";

// Icons
import { FlameOutline, RestaurantOutline, StarOutline } from "react-ionicons";

// Stylesheets
import styles from "./MealCard.module.css";

/**
 * Create card component to display meal and meal details
 *
 * @param {string} imageSrc - Image location
 * @param {string} imageAlt - Image alt text
 * @param {string[]} tags - Array of tags
 * @param {string} title - Card title
 * @param {number} calories - Number of calories
 * @param {number} nutriscore - Nutriscore value
 * @param {number} rating - Rating value
 * @param {number} reviews - Number of reviews
 * @return {*}
 */
const MealCard = ({
    imageSrc,
    imageAlt,
    tags,
    title,
    calories,
    nutriscore,
    rating,
    reviews,
}) => {
    const colorPrimary = "#e67e22";

    return (
        <div className={styles.meal}>
            <img className={styles.mealImage} src={imageSrc} alt={imageAlt} />
            <div className={styles.mealContent}>
                {tags.map((tag) => {
                    return (
                        <div className={styles.tagList}>
                            <span className={styles.tag}>{tag}</span>
                        </div>
                    );
                })}
                <p className={styles.mealTitle}>{title}</p>
                <ul className={styles.mealAttributeList}>
                    <li className={styles.mealAttribute}>
                        <FlameOutline color={colorPrimary} height="2.4rem" />
                        <span>
                            <strong>{calories}</strong> calories
                        </span>
                    </li>
                    <li className={styles.mealAttribute}>
                        <RestaurantOutline
                            color={colorPrimary}
                            height="2.4rem"
                        />
                        <span>
                            NutriScore &reg; <strong>{nutriscore}</strong>
                        </span>
                    </li>
                    <li className={styles.mealAttribute}>
                        <StarOutline color={colorPrimary} height="2.4rem" />
                        <span>
                            <strong>{rating}</strong> {`rating (${reviews})`}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MealCard;
