import React from "react";

// Images
import appScreenOne from "../../../images/app/app-screen-1.png";
import appScreenTwo from "../../../images/app/app-screen-2.png";
import appScreenThree from "../../../images/app/app-screen-3.png";

// Data
import { stepDescriptions } from "./stepDescriptions";

// Stylesheets
import styles from "./How.module.css";

// Components
import Flex from "../../Layout/Flex";
import SectionHeading from "../../Headings/SectionHeading";
import Step from "./Step";

const How = () => {
    return (
        <section id="howSection" className={styles.sectionHow}>
            <SectionHeading
                subheading="How it works"
                secondaryHeading="Your daily dose of health in 3 simple steps"
            />

            <Flex flexDirection="column">
                <Step
                    stepNumber="01"
                    imageSide="right"
                    imageSrc={appScreenOne}
                    imageAlt="iPhone app preferences selection screen"
                    heading="Tell us what you like (and don't like)"
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
            </Flex>
        </section>
    );
};

export default How;
