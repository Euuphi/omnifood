import React from "react";

// Stylesheets
import styles from "./Pricing.module.css";

// Components
import Container from "../../Layout/Container";
import SectionHeading from "../../Headings/SectionHeading";

const Pricing = () => {
    return (
        <section className={styles.sectionPricing}>
            <Container marginTop="9.6rem">
                <SectionHeading
                    subheading="Pricing"
                    secondaryHeading="Eating well without breaking the bank"
                    noContainer
                />
            </Container>
        </section>
    );
};

export default Pricing;
