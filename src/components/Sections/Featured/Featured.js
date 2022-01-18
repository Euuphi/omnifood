import React from "react";

// Stylesheets
import styles from "./Featured.module.css";

import Container from "../../Layout/Container";

const Featured = () => {
    return (
        <section className={styles.sectionFeatured}>
            <Container>
                <h2 className={styles.headingFeaturedIn}>As featured in</h2>
            </Container>
        </section>
    );
};

export default Featured;
