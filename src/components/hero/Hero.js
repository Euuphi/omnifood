import React from "react";

// Images
import hero from "../../images/hero.png";
import customerOne from "../../images/customers/customer-1.jpg";
import customerTwo from "../../images/customers/customer-2.jpg";
import customerThree from "../../images/customers/customer-3.jpg";
import customerFour from "../../images/customers/customer-4.jpg";
import customerFive from "../../images/customers/customer-5.jpg";
import customerSix from "../../images/customers/customer-6.jpg";

// Styles
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <main>
            <section className={styles.sectionHero}>
                <div className={styles.hero}>
                    <div className={styles.heroTextBox}>
                        <h1 className={`heading-primary`}>
                            A healthy meal delivered to your door, every single
                            day
                        </h1>
                        <p className={styles.heroDescription}>
                            The smart 365-days-per-year food subscription that
                            will make you eat healthy again. Tailored to your
                            personal tastes and nutritional needs.
                        </p>
                        <a href="#" className={`btn btn--full margin-right-sm`}>
                            Start eating well
                        </a>
                        <a href="#" className={`btn btn--outline`}>
                            Learn more &darr;
                        </a>
                        <div className={styles.deliveredMeals}>
                            <div className={styles.deliveredImages}>
                                <img
                                    src={customerOne}
                                    class={styles.customerImage}
                                    alt="Customer 1"
                                />
                                <img
                                    src={customerTwo}
                                    class={styles.customerImage}
                                    alt="Customer 2"
                                />
                                <img
                                    src={customerThree}
                                    class={styles.customerImage}
                                    alt="Customer 3"
                                />
                                <img
                                    src={customerFour}
                                    class={styles.customerImage}
                                    alt="Customer 4"
                                />
                                <img
                                    src={customerFive}
                                    class={styles.customerImage}
                                    alt="Customer 5"
                                />
                                <img
                                    src={customerSix}
                                    class={styles.customerImage}
                                    alt="Customer 6"
                                />
                            </div>
                            <p class={styles.deliveredText}>
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
                </div>
            </section>
        </main>
    );
};

export default Hero;
