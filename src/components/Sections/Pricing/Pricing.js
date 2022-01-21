import React from "react";

// Stylesheets
import styles from "./Pricing.module.css";

// Components
import Container from "../../Layout/Container";
import SectionHeading from "../../Headings/SectionHeading";
import Grid from "../../Layout/Grid";
import PricingPlan from "./PricingPlan";

const Pricing = () => {
    const starterPlanBenefits = [
        "1 meal per day",
        "Order from 11am to 9pm",
        "Delivery is free",
    ];

    const starterPlanConstraints = ["Get access to latest recipes"];

    const completePlanBenefits = [
        "2 meals per day",
        "Order 24/7",
        "Delivery is free",
        "Get access to latest recipes",
    ];

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
                    <PricingPlan
                        className={styles.planStarter}
                        name="Starter"
                        text="per month, That's just $13 per meal!"
                        price={399}
                        planBenefits={starterPlanBenefits}
                        planConstraints={starterPlanConstraints}
                    />
                    <PricingPlan
                        className={styles.planComplete}
                        name="Complete"
                        text="per month, That's just $11 per meal!"
                        price={649}
                        planBenefits={completePlanBenefits}
                    />
                </Grid>
            </Container>
        </section>
    );
};

export default Pricing;
