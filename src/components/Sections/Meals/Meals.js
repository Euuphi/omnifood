import React, { useContext } from "react";

// Contexts
import { MediaQContext } from "../../../context/MediaQContext";

// Images
import jpGyozas from "../../../images/meals/meal-1.jpg";
import avocadoSalad from "../../../images/meals/meal-2.jpg";

// Stylesheets
import styles from "./Meals.module.css";

// Components
import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";
import SectionHeading from "../../Headings/SectionHeading";
import MealCard from "./MealCard";
import DietList from "./DietList";
import Link from "../../UI/Link";

const Meals = () => {
    // Media Queries
    const { portraitTabletScreen, mobileScreen } = useContext(MediaQContext);

    // Function to calculate number of columns based on screen size
    const calculateCols = () => {
        if (mobileScreen) {
            return 1;
        } else if (portraitTabletScreen) {
            return 2;
        } else {
            return 3;
        }
    };

    return (
        <section id="mealsSection" className={styles.sectionMeals}>
            <SectionHeading
                className={styles.mealsHeading}
                subheading="Meals"
                secondaryHeading="Omnifood AI chooses from 5,000+ recipes"
            />
            <Container marginBottom="4.8rem">
                <Grid col={calculateCols()}>
                    <MealCard
                        imageSrc={jpGyozas}
                        imageAlt="Japanese Gyozas"
                        tags={["Vegetarian"]}
                        title="Japanese Gyozas"
                        calories={650}
                        nutriscore={74}
                        rating={4.9}
                        reviews={537}
                    />
                    <MealCard
                        imageSrc={avocadoSalad}
                        imageAlt="Avacado Salad"
                        tags={["Vegan", "Paleo"]}
                        title="Avacado Salad"
                        calories={400}
                        nutriscord={92}
                        rating={4.8}
                        reviews={441}
                    />
                    <DietList />
                </Grid>
            </Container>
            <Container className={styles.allRecipes}>
                <Link>See more recipes</Link>
            </Container>
        </section>
    );
};

export default Meals;
