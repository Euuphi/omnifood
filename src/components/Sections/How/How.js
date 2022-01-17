import React from "react";
import Container from "../../Layout/Container";

// Images
import appScreenOne from "../../../images/app/app-screen-1.png";

// Stylesheets
import styles from "./How.module.css";

const How = () => {
    return (
        <section className={styles.sectionHow}>
            <Container>
                <span className={styles.subheading}>How it works</span>
                {/* TODO: Extract to reusable component */}
                <h2 className={`heading-secondary`}>
                    Your daily dose of health in 3 simple steps
                </h2>
            </Container>
            <Container>
                <div className={styles.stepTextBox}>
                    <p className={styles.stepNumber}>01</p>
                    {/* TODO: Extract to reusable component */}
                    <h3 className={`heading-tertiary`}>
                        Tell us what you like (and what not)
                    </h3>
                    <p className={styles.stepDescription}>
                        Never again waste time thinking about what to eat!
                        Omnifood AI will create a 100% personalized weekly meal
                        plan just for you. It makes sure you get all the
                        nutrients and vitamins you need, no matter what diet you
                        follow!
                    </p>
                </div>
                <div className={styles.stepImageBox}>
                    <img
                        className={styles.stepImage}
                        src={appScreenOne}
                        alt="iPhone app preferences selection screen"
                    />
                </div>
            </Container>
        </section>
    );
};

export default How;
