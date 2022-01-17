import React from "react";

// Images
import hero from "../../../images/hero.png";
import customerOne from "../../../images/customers/customer-1.jpg";
import customerTwo from "../../../images/customers/customer-2.jpg";
import customerThree from "../../../images/customers/customer-3.jpg";
import customerFour from "../../../images/customers/customer-4.jpg";
import customerFive from "../../../images/customers/customer-5.jpg";
import customerSix from "../../../images/customers/customer-6.jpg";

// Styles
import styles from "./Hero.module.css";

import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";
import HeadingPrimary from "../../Headings/HeadingPrimary";

const Hero = () => {
    return (
        <main>
            <section className={styles.sectionHero}>
                <Container maxWidth={130}>
                    <Grid col={2} alignItems="center">
                        <div className={styles.heroTextBox}>
                            <HeadingPrimary>
                                "A healthy meal delivered to your door, every
                                single day"
                            </HeadingPrimary>
                            <p className={styles.heroDescription}>
                                The smart 365-days-per-year food subscription
                                that will make you eat healthy again. Tailored
                                to your personal tastes and nutritional needs.
                            </p>
                            {/* TODO: Extract into reusable component */}
                            <a
                                href="#"
                                className={`btn btn--full margin-right-sm`}>
                                Start eating well
                            </a>
                            <a href="#" className={`btn btn--outline`}>
                                Learn more &darr;
                            </a>
                            <div className={styles.deliveredMeals}>
                                <div className={styles.deliveredImages}>
                                    <img
                                        className={styles.customerImage}
                                        src={customerOne}
                                        alt="Customer 1"
                                    />
                                    <img
                                        className={styles.customerImage}
                                        src={customerTwo}
                                        alt="Customer 2"
                                    />
                                    <img
                                        className={styles.customerImage}
                                        src={customerThree}
                                        alt="Customer 3"
                                    />
                                    <img
                                        className={styles.customerImage}
                                        src={customerFour}
                                        alt="Customer 4"
                                    />
                                    <img
                                        className={styles.customerImage}
                                        src={customerFive}
                                        alt="Customer 5"
                                    />
                                    <img
                                        className={styles.customerImage}
                                        src={customerSix}
                                        alt="Customer 6"
                                    />
                                </div>
                                <p className={styles.deliveredText}>
                                    <span>250,000+ </span>
                                    meals delivered last year!
                                </p>
                            </div>
                        </div>
                        <div className={styles.heroImageBox}>
                            <img
                                src={hero}
                                className={styles.heroImage}
                                alt="Woman enjoying food, meals in storage container and food bowls on a table"
                            />
                        </div>
                    </Grid>
                </Container>
            </section>
        </main>
    );
};

export default Hero;
