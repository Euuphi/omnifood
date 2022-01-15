import React from "react";

// Images
import hero from "../../images/hero.png";

// Styles
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={styles.sectionHero}>
            <div className={styles.hero}>
                <div className={styles.heroTextBox}>
                    <h1 className={`heading-primary`}>
                        A healthy meal delivered to your door, every single day
                    </h1>
                    <p className={styles.heroDescription}>
                        The smart 365-days-per-year food subscription that will
                        make you eat healthy again. Tailored to your personal
                        tastes and nutritional needs. We have delivered 250,000+
                        meals last year!
                    </p>
                    <a href="#" className={`btn btn--full margin-right-sm`}>
                        Start eating well
                    </a>
                    <a href="#" className={`btn btn--outline`}>
                        Learn more &darr;
                    </a>
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
    );
};

export default Hero;
