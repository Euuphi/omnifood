import React from "react";

// Stylesheets
import styles from "./Pricing.module.css";

// Components
import Container from "../../Layout/Container";
import SectionHeading from "../../Headings/SectionHeading";
import Grid from "../../Layout/Grid";
import PricingPlan from "./PricingPlan";

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
            <Container>
                <Grid col={2}>
                    <PricingPlan />
                    <PricingPlan />
                </Grid>
            </Container>
        </section>
    );
};

export default Pricing;
