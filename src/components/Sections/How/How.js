import React from "react";

// Images
import appScreenOne from "../../../images/app/app-screen-1.png";
import appScreenTwo from "../../../images/app/app-screen-2.png";
import appScreenThree from "../../../images/app/app-screen-3.png";

// Data
import { stepDescriptions } from "./stepDescriptions";

// Stylesheets
import styles from "./How.module.css";

import Container from "../../Layout/Container";
import Step from "./Step";

import HeadingSecondary from "../../Headings/HeadingSecondary";

const How = () => {
    return (
        <section className={styles.sectionHow}>
            <Container>
                <span className={styles.subheading}>How it works</span>
                <HeadingSecondary text="Your daily dose of health in 3 simple steps" />
            </Container>

            <Step
                stepNumber="01"
                imageSide="right"
                imageSrc={appScreenOne}
                imageAlt="iPhone app preferences selection screen"
                heading="Tell us what you like (and what not)"
                description={stepDescriptions[0]}
            />

            <Step
                stepNumber="02"
                imageSide="left"
                imageSrc={appScreenTwo}
                imageAlt=""
                heading="Approve your weekly meal plan"
                description={stepDescriptions[1]}
            />

            <Step
                stepNumber="03"
                imageSide="right"
                imageSrc={appScreenThree}
                imageAlt=""
                heading="Receive meals at convenient time"
                description={stepDescriptions[2]}
            />
        </section>
    );
};

export default How;
