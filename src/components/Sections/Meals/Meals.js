import React from "react";

// Stylesheets
import styles from "./Meals.module.css";

// Components
import SectionHeading from "../../Headings/SectionHeading";

const Meals = () => {
    return (
        <section className={styles.sectionMeals}>
            <SectionHeading
                subheading="Meals"
                secondaryHeading="Omnifood AI chooses from 5,000+ recipes"
            />
        </section>
    );
};

export default Meals;
