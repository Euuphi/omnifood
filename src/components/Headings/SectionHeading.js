import React from "react";

// Components
import Container from "../Layout/Container";
import Subheading from "./Subheading";
import HeadingSecondary from "./HeadingSecondary";

/**
 * Heading for start of page section
 *
 * @param {string} subheading - Subheading text
 * @param {string} secondaryHeading  - Secondary heading text
 * @return {*}
 */
const SectionHeading = ({ subheading, secondaryHeading }) => {
    return (
        <Container>
            <Subheading>{subheading}</Subheading>
            <HeadingSecondary>{secondaryHeading}</HeadingSecondary>
        </Container>
    );
};

export default SectionHeading;
