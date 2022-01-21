import React from "react";

// Stylesheets
import styles from "./CTA.module.css";

//Components
import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";

const CTA = () => {
    return (
        <section className={styles.sectionCta}>
            <Container className={styles.cta} marginBottom="9.6rem">
                <Grid col="2fr 1fr">
                    <div className={styles.ctaTextBox}>CTA</div>
                    <div className={styles.ctaImageBox}>Image</div>
                </Grid>
            </Container>
        </section>
    );
};

export default CTA;
