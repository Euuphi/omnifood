import React, { useContext } from "react";

// Contexts
import { MediaQContext } from "../../../context/MediaQContext";

// Images
import heroPng from "../../../images/hero.png";
import heroWebp from "../../../images/hero.webp";
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

/**
 * Returns JSX for hero section
 *
 * @param {boolean} isSticky - Tracks when page header will become sticky
 * @param {*} sectionRef - Ref for hero section component
 * @return {*}
 */

const Hero = ({ isSticky, sectionRef }) => {
    // Media Queries
    const { laptopScreen, portraitTabletScreen, mobileScreen } =
        useContext(MediaQContext);

    // Function to calculate section padding based on media queries
    const calculatePadding = () => {
        if (mobileScreen) {
            return "0 3.2rem";
        } else if (portraitTabletScreen) {
            return "0 8rem";
        } else {
            return "0 3.2rem";
        }
    };

    return (
        <section className={styles.sectionHero} ref={sectionRef}>
            <Container
                maxWidth={laptopScreen ? "120rem" : "130rem"}
                // Set margin top to offset header switching to fixed position
                marginTop={isSticky ? "9.6rem" : "0"}
                padding={calculatePadding()}>
                <Grid col={portraitTabletScreen ? 1 : 2} alignItems="center">
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
                                portraitTabletScreen && "margin-bottom-md"
                            }`}
                            offset={-96}
                            smooth>
                            Start eating well
                        </Link>
                        <Link
                            to="howSection"
                            className={`${buttonStyles.btn} ${
                                buttonStyles.btnOutline
                            } ${portraitTabletScreen && "margin-bottom-md"}`}
                            offset={-30}
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
                        <picture>
                            <source srcSet={heroWebp} type="image/webp" />
                            <source srcSet={heroPng} type="image/png" />
                            <img
                                className={styles.heroImage}
                                alt="Woman enjoying food, meals in storage container and food bowls on a table"
                            />
                        </picture>
                    </div>
                </Grid>
            </Container>
        </section>
    );
};

export default Hero;
