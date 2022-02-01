import React, { useContext } from "react";

// Contexts
import { MediaQContext } from "../../../context/MediaQContext";

// Stylesheets
import styles from "./CTA.module.css";

//Components
import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";
import HeadingSecondary from "../../Headings/HeadingSecondary";
import CtaForm from "./CtaForm";

const CTA = () => {
    // Media Queries
    const { landscapeTabletScreen, portraitTabletScreen, mobileScreen } =
        useContext(MediaQContext);

    // Function to calculate margin-bottom of Container based on screen size
    const calculateMarginBottom = () => {
        if (landscapeTabletScreen) {
            return "9.6rem";
        } else {
            return "12.8rem";
        }
    };

    // Function to calculate grid-template-column based on screen size
    const calculateCols = () => {
        if (mobileScreen) {
            return 1;
        } else if (portraitTabletScreen) {
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
