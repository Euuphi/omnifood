import React from "react";

import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";
import HeadingTertiary from "../../Headings/HeadingTertiary";

import styles from "./Step.module.css";

/**
 * Two column grid for displaying image and some text
 *
 * @param {"right" || "left"} imageSide - Pick which side to display image
 * @param {string} imageSrc - Location of image
 * @param {string} imageAlt - Alt text for image
 * @param {string} heading - Heading text
 * @param {string} description - Description paragraph text
 * @param {string} stepNumber - Number of current step
 * @return {*}
 */
const Step = ({
    imageSide,
    imageSrc,
    imageAlt,
    heading,
    description,
    stepNumber,
}) => {
    const imageBox = (
        <div className={styles.stepImageBox}>
            <img className={styles.stepImage} src={imageSrc} alt={imageAlt} />
        </div>
    );

    return (
        <Container>
            <Grid col={2}>
                {imageSide === "left" && imageBox}
                <div className={styles.stepTextBox}>
                    <p className={styles.stepNumber}>{stepNumber}</p>
                    <HeadingTertiary text={heading} />
                    <p className={styles.stepDescription}>{description}</p>
                </div>
                {imageSide === "right" && imageBox}
            </Grid>
        </Container>
    );
};

export default Step;
