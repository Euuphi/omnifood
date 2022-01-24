import React from "react";
import { useMediaQuery } from "@mui/material";

// Stylesheets
import styles from "./Step.module.css";

// Components
import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";
import HeadingTertiary from "../../Headings/HeadingTertiary";

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

    // Media Queries
    const mobileScreen = useMediaQuery("(max-width: 34em)");

    return (
        <Container>
            <Grid col={mobileScreen ? 1 : 2} gap="6.4rem">
                {imageSide === "left" && imageBox}
                <div className={styles.stepTextBox}>
                    <p className={styles.stepNumber}>{stepNumber}</p>
                    <HeadingTertiary>{heading}</HeadingTertiary>
                    <p className={styles.stepDescription}>{description}</p>
                </div>
                {imageSide === "right" && imageBox}
            </Grid>
        </Container>
    );
};

export default Step;
