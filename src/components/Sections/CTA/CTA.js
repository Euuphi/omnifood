import React from "react";
import { useMediaQuery } from "@mui/material";

// Stylesheets
import styles from "./CTA.module.css";

//Components
import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";
import HeadingSecondary from "../../Headings/HeadingSecondary";
import CtaForm from "./CtaForm";

const CTA = () => {
    // Media Queries
    const largeTabletScreen = useMediaQuery("(max-width: 75em)");
    const smallTabletScreen = useMediaQuery("(max-width: 59em)");
    const mobileScreen = useMediaQuery("(max-width: 34em)");

    // Function to calculate margin-bottom of Container based on media queries
    const calculateMarginBottom = () => {
        if (largeTabletScreen) {
            return "9.6rem";
        } else {
            return "12.8rem";
        }
    };

    // Function to calculate grid-template-column based on media queries
    const calculateCols = () => {
        if (mobileScreen) {
            return 1;
        } else if (smallTabletScreen) {
            return "3fr 2fr";
        } else {
            return "2fr 1fr";
        }
    };

    return (
        <section id="ctaSection" className={styles.sectionCta}>
            <Container marginBottom={calculateMarginBottom()}>
                <div className={styles.cta}>
                    <Grid col={calculateCols()} gap="0">
                        <div className={styles.ctaTextBox}>
                            <HeadingSecondary className={styles.ctaHeading}>
                                Get your first meal for free!
                            </HeadingSecondary>
                            <p className={styles.ctaText}>
                                Healthy, tasty and hassle-free meals are waiting
                                for you. Start eating well today. You can cancel
                                or pause anytime. And the first meal is on us!
                            </p>
                            <CtaForm />
                        </div>
                        <div
                            className={styles.ctaImageBox}
                            role="img"
                            aria-label="A woman enjoying food"></div>
                    </Grid>
                </div>
            </Container>
        </section>
    );
};

export default CTA;
