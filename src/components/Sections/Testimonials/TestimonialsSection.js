import React, { useContext } from "react";

// Contexts
import { MediaQContext } from "../../../context/MediaQContext";

// Stylesheets
import styles from "./TestimonialsSection.module.css";

// Components
import Grid from "../../Layout/Grid";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";

const TestimonialsSection = () => {
    // Media Queries
    const { portraitTabletScreen } = useContext(MediaQContext);

    return (
        <section
            id="testimonialsSection"
            className={styles.sectionTestimonials}>
            <Grid
                col={portraitTabletScreen ? 1 : "55fr 45fr"}
                gap="0"
                alignItems="center">
                <Testimonials />
                <Gallery />
            </Grid>
        </section>
    );
};

export default TestimonialsSection;
