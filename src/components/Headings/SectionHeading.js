import React from "react";

// Components
import Container from "../Layout/Container";
import Subheading from "./Subheading";
import HeadingSecondary from "./HeadingSecondary";

/**
 * Heading for start of page section
 *
 * @param {string} className - Additional classes for container
 * @param {string} subheading - Subheading text
 * @param {string} secondaryHeading  - Secondary heading text
 * @return {*}
 */
const SectionHeading = ({ className, subheading, secondaryHeading }) => {
    return (
        <Container className={className}>
            <Subheading>{subheading}</Subheading>
            <HeadingSecondary>{secondaryHeading}</HeadingSecondary>
        </Container>
    );
};

export default SectionHeading;
