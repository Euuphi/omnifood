import React from "react";

// Stylesheets
import styles from "./TestimonialsSection.module.css";

// Components
import Grid from "../../Layout/Grid";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const TestimonialsSection = () => {
    return (
        <section
            id="testimonialsSection"
            className={styles.sectionTestimonials}>
            <Grid col="55fr 45fr" gap="0" alignItems="center">
                <Testimonials />
                <Gallery />
            </Grid>
        </section>
    );
};

export default TestimonialsSection;
