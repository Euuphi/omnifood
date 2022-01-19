import React from "react";

// Stylesheets
import styles from "./Testimonials.module.css";

// Components
import Grid from "../../Layout/Grid";

const Testimonials = () => {
    return (
        <section className={styles.sectionTestimonials}>
            <Grid col={2}>
                <div className={styles.testimonialsList}>Testimonials</div>
                <div className={styles.gallery}>Gallery</div>
            </Grid>
        </section>
    );
};

export default Testimonials;
