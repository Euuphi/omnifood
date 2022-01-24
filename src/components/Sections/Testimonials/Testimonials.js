import React from "react";
import { useMediaQuery } from "@mui/material";

// Images
import dave from "../../../images/customers/dave.jpg";
import ben from "../../../images/customers/ben.jpg";
import steve from "../../../images/customers/steve.jpg";
import hannah from "../../../images/customers/hannah.jpg";

// Components
import Grid from "../../Layout/Grid";
import Container from "../../Layout/Container";
import SectionHeading from "../../Headings/SectionHeading";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
    // Media Queries
    const largeTabletScreen = useMediaQuery("(max-width: 75em)");
    const smallTabletScreen = useMediaQuery("(max-width: 59em)");
    const mobileScreen = useMediaQuery("(max-width: 34em)");

    // Function to calculate padding for testimonials
    const calculatePadding = () => {
        if (smallTabletScreen) {
            // Padding for small tablet
            return "9.6rem";
        } else if (largeTabletScreen) {
            // Padding for large tablet
            return "4.8rem";
        } else {
            // Default padding
            return "9.6rem";
        }
    };

    return (
        <Container padding={calculatePadding()}>
            <SectionHeading
                subheading="Testimonials"
                secondaryHeading="Once you try it, you can't go back"
                noContainer
            />
            <Grid col={mobileScreen ? 1 : 2} gap="4.8rem 8rem">
                <TestimonialItem
                    author="Dave Bryson"
                    quote="Inexpensive, healthy and great-tasting meals, without evenhaving to order manually! It feels truly magical."
                    imageSrc={dave}
                    imageAlt="Customer Dave Bryson"
                />
                <TestimonialItem
                    author="Ben Hadley"
                    quote="The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!"
                    imageSrc={ben}
                    imageAlt="Customer Ben Hadley"
                />
                <TestimonialItem
                    author="Steve Miller"
                    quote="Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!"
                    imageSrc={steve}
                    imageAlt="Customer Steve Miller"
                />
                <TestimonialItem
                    author="Hannah Smith"
                    quote="I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic."
                    imageSrc={hannah}
                    imageAlt="Customer Hannah Smith"
                />
            </Grid>
        </Container>
    );
};

export default Testimonials;
