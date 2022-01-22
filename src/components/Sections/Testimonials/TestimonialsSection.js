import React from "react";
import { useMediaQuery } from "@mui/material";

// Stylesheets
import styles from "./TestimonialsSection.module.css";

// Components
import Grid from "../../Layout/Grid";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const TestimonialsSection = () => {
    const smallTabletScreen = useMediaQuery("(max-width: 59em");

    return (
        <section
            id="testimonialsSection"
            className={styles.sectionTestimonials}>
            <Grid
                col={smallTabletScreen ? 1 : "55fr 45fr"}
                gap="0"
                alignItems="center">
                <Testimonials />
                <Gallery />
            </Grid>
        </section>
    );
};

export default TestimonialsSection;
