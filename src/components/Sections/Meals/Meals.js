import React from "react";

// Stylesheets
import styles from "./Meals.module.css";

// Components
import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";
import SectionHeading from "../../Headings/SectionHeading";
import MealCard from "./MealCard";

const Meals = () => {
    return (
        <section className={styles.sectionMeals}>
            <SectionHeading
                subheading="Meals"
                secondaryHeading="Omnifood AI chooses from 5,000+ recipes"
            />
            <Container>
                <Grid col={3}>
                    <MealCard />
                </Grid>
            </Container>
        </section>
    );
};

export default Meals;
