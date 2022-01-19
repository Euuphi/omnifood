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
 * @param {boolean} noContainer - Set to true for no wrapping container
 * @return {*}
 */

const SectionHeading = ({
    className,
    subheading,
    secondaryHeading,
    noContainer,
}) => {
    const withContainer = (
        <Container className={className}>
            <Subheading>{subheading}</Subheading>
            <HeadingSecondary>{secondaryHeading}</HeadingSecondary>
        </Container>
    );

    const withoutContainer = (
        <>
            <Subheading>{subheading}</Subheading>
            <HeadingSecondary>{secondaryHeading}</HeadingSecondary>
        </>
    );

    return noContainer ? withoutContainer : withContainer;
};

SectionHeading.defaultProps = {
    noContainer: false,
};

export default SectionHeading;
