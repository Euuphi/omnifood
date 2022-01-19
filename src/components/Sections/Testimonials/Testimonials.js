import React from "react";

// Images -Customers

import dave from "../../../images/customers/dave.jpg";
import ben from "../../../images/customers/ben.jpg";
import steve from "../../../images/customers/steve.jpg";
import hannah from "../../../images/customers/hannah.jpg";

// Images - Gallery
import galleryOne from "../../../images/gallery/gallery-1.jpg";
import galleryTwo from "../../../images/gallery/gallery-2.jpg";
import galleryThree from "../../../images/gallery/gallery-3.jpg";
import galleryFour from "../../../images/gallery/gallery-4.jpg";
import galleryFive from "../../../images/gallery/gallery-5.jpg";
import gallerySix from "../../../images/gallery/gallery-6.jpg";
import gallerySeven from "../../../images/gallery/gallery-7.jpg";
import galleryEight from "../../../images/gallery/gallery-8.jpg";
import galleryNine from "../../../images/gallery/gallery-9.jpg";
import galleryTen from "../../../images/gallery/gallery-10.jpg";
import galleryEleven from "../../../images/gallery/gallery-11.jpg";
import galleryTwelve from "../../../images/gallery/gallery-12.jpg";

// Stylesheets
import styles from "./Testimonials.module.css";

// Components
import Grid from "../../Layout/Grid";
import TestimonialItem from "./TestimonialItem";
import Container from "../../Layout/Container";
import SectionHeading from "../../Headings/SectionHeading";
import GalleryItem from "./GalleryItem";

const Testimonials = () => {
    return (
        <section className={styles.sectionTestimonials}>
            <Grid col="55fr 45fr" gap="0">
                <Container padding="9.6rem">
                    <SectionHeading
                        subheading="Testimonials"
                        secondaryHeading="Once you try it, you can't go back"
                        noContainer
                    />
                    <Grid col={2} gap="4.8rem 8rem">
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
                <Grid col={3} gap="1.6rem" padding="1.6rem">
                    <GalleryItem
                        imageSrc={galleryOne}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryTwo}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryThree}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryFour}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryFive}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={gallerySix}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={gallerySeven}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryEight}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryNine}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryTen}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryEleven}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryTwelve}
                        imageAlt="Beautifully arranged food"
                    />
                </Grid>
            </Grid>
        </section>
    );
};

export default Testimonials;
