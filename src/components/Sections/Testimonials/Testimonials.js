import React from "react";

// Images
import dave from "../../../images/customers/dave.jpg";
import ben from "../../../images/customers/ben.jpg";
import steve from "../../../images/customers/steve.jpg";
import hannah from "../../../images/customers/hannah.jpg";

// Stylesheets
import styles from "./Testimonials.module.css";

// Components
import Grid from "../../Layout/Grid";
import TestimonialItem from "./TestimonialItem";
import Container from "../../Layout/Container";
import SectionHeading from "../../Headings/SectionHeading";

const Testimonials = () => {
    return (
        <section className={styles.sectionTestimonials}>
            <Grid col={2}>
                <Container>
                    <SectionHeading
                        subheading="Testimonials"
                        secondaryHeading="Once you try it, you can't go back"
                        noContainer
                    />
                    <div className={styles.testimonialsList}>
                        <Grid col={2} gap="4.8rem">
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
                    </div>
                </Container>
                <div className={styles.gallery}>Gallery</div>
            </Grid>
        </section>
    );
};

export default Testimonials;
