import React from "react";

// Stylesheets
import styles from "./CTA.module.css";

//Components
import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";
import HeadingSecondary from "../../Headings/HeadingSecondary";
import CtaForm from "./CtaForm";

const CTA = () => {
    return (
        <section className={styles.sectionCta}>
            <Container marginBottom="12.8rem">
                <div className={styles.cta}>
                    <Grid col="2fr 1fr" gap="0">
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
