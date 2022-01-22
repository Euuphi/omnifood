import React from "react";

// Stylesheets
import styles from "./Pricing.module.css";
import featureStyles from "./Feature.module.css";

// Icons
import { IconContext } from "react-icons";
import {
    IoInfiniteOutline,
    IoLeafOutline,
    IoNutritionOutline,
    IoPauseOutline,
} from "react-icons/io5";

// Components
import Container from "../../Layout/Container";
import SectionHeading from "../../Headings/SectionHeading";
import Grid from "../../Layout/Grid";
import PricingPlan from "./PricingPlan";
import Feature from "./Feature";

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
        <section id="pricingSection" className={styles.sectionPricing}>
            <Container marginTop="9.6rem">
                <SectionHeading
                    subheading="Pricing"
                    secondaryHeading="Eating well without breaking the bank"
                    noContainer
                />
            </Container>
            <Container marginBottom="4.8rem">
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

            <Container marginBottom="9.6rem">
                <aside className={styles.planDetails}>
                    Prices include all applicable taxes. Users can cancel at any
                    time. Both plans include the follow:
                </aside>
            </Container>

            <IconContext.Provider value={{ className: featureStyles.icon }}>
                <Container>
                    <Grid col={4}>
                        <Feature
                            icon={<IoInfiniteOutline />}
                            title="Never cook again!"
                            text="Our subscriptions cover 365 days per year, even including major holidays."
                        />
                        <Feature
                            icon={<IoNutritionOutline />}
                            title="Local and organic"
                            text="Our cooks only use local, fresh, and organic products to prepare your meals."
                        />
                        <Feature
                            icon={<IoLeafOutline />}
                            title="No waste"
                            text="All our partners only use reusable containers to package all your meals."
                        />
                        <Feature
                            icon={<IoPauseOutline />}
                            title="Pause anytime"
                            text="Going on vacation? Just pause your subscription, and we refund unused days."
                        />
                    </Grid>
                </Container>
            </IconContext.Provider>
        </section>
    );
};

export default Pricing;
