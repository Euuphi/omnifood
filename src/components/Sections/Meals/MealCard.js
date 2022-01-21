import React from "react";

// Icons
import {
    IoFlameOutline,
    IoRestaurantOutline,
    IoStarOutline,
} from "react-icons/io5";

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

    // Mapping function for list of tags
    // TODO: Possible refactor on how tag color is choosen
    const mapTags = (tag) => {
        let tagClass;

        // Choose which background color to use depending on what tag to display
        if (tag === "Vegetarian") tagClass = styles.tagVegetarian;
        else if (tag === "Vegan") tagClass = styles.tagVegan;
        else if (tag === "Paleo") tagClass = styles.tagPaleo;

        return (
            <span className={`${styles.tag} ${tagClass}`} key={tag}>
                {tag}
            </span>
        );
    };

    return (
        <div className={styles.meal}>
            <img className={styles.mealImage} src={imageSrc} alt={imageAlt} />
            <div className={styles.mealContent}>
                <div className={styles.tagList}>{tags.map(mapTags)}</div>
                <p className={styles.mealTitle}>{title}</p>
                <ul className={styles.mealAttributeList}>
                    <li className={styles.mealAttribute}>
                        <IoFlameOutline color={colorPrimary} size="2.4rem" />
                        <span>
                            <strong>{calories}</strong> calories
                        </span>
                    </li>
                    <li className={styles.mealAttribute}>
                        <IoRestaurantOutline
                            color={colorPrimary}
                            size="2.4rem"
                        />
                        <span>
                            NutriScore &reg; <strong>{nutriscore}</strong>
                        </span>
                    </li>
                    <li className={styles.mealAttribute}>
                        <IoStarOutline color={colorPrimary} size="2.4rem" />
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
