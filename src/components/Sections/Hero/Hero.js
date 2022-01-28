import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

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
import buttonStyles from "../../UI/Button.module.css";

// Components
import Container from "../../Layout/Container";
import Grid from "../../Layout/Grid";
import HeadingPrimary from "../../Headings/HeadingPrimary";
import { Link } from "react-scroll";

const Hero = () => {
    // Media Queries
    const laptopScreen = useMediaQuery("(max-width: 84em)");
    const smallTabletScreen = useMediaQuery("(max-width: 59em");
    const mobileScreen = useMediaQuery("(max-width: 34em)");

    // Function to calculate section padding based on media queries
    const calculatePadding = () => {
        if (mobileScreen) {
            return "0 3.2rem";
        } else if (smallTabletScreen) {
            return "0 8rem";
        } else {
            return "0 3.2rem";
        }
    };

    return (
        <section className={styles.sectionHero}>
            <Container
                maxWidth={laptopScreen ? "120rem" : "130rem"}
                padding={calculatePadding()}>
                <Grid col={smallTabletScreen ? 1 : 2} alignItems="center">
                    <div className={styles.heroTextBox}>
                        <HeadingPrimary>
                            A healthy meal delivered to your door, every single
                            day
                        </HeadingPrimary>
                        <p className={styles.heroDescription}>
                            The smart 365-days-per-year food subscription that
                            will make you eat healthy again. Tailored to your
                            personal tastes and nutritional needs.
                        </p>
                        <Link
                            to="ctaSection"
                            className={`${"margin-right-sm"} ${
                                buttonStyles.btn
                            } ${buttonStyles.btnFull} ${
                                smallTabletScreen && "margin-bottom-md"
                            }`}
                            smooth>
                            Start eating well
                        </Link>
                        <Link
                            to="howSection"
                            className={`${buttonStyles.btn} ${
                                buttonStyles.btnOutline
                            } ${smallTabletScreen && "margin-bottom-md"}`}
                            smooth>
                            Learn more &darr;
                        </Link>
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
    );
};

export default Hero;
