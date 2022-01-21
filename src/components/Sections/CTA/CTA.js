import React from "react";

// Stylesheets
import styles from "./CTA.module.css";

//Components
import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";

const CTA = () => {
    return (
        <section className={styles.sectionCta}>
            <Container marginBottom="9.6rem">
                <div className={styles.cta}>
                    <Grid col="2fr 1fr" gap="0">
                        <div className={styles.ctaTextBox}>CTA</div>
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
