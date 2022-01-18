import React from "react";

// Stylesheets
import styles from "./Featured.module.css";

// Images - Logos
import businessInsider from "../../../images/logos/business-insider.png";
import forbes from "../../../images/logos/forbes.png";
import newYorkTimes from "../../../images/logos/the-new-york-times.png";
import techCrunch from "../../../images/logos/techcrunch.png";
import usaToday from "../../../images/logos/usa-today.png";

// Components
import Container from "../../Layout/Container";

const Featured = () => {
    return (
        <section className={styles.sectionFeatured}>
            <Container>
                <h2 className={styles.headingFeaturedIn}>As featured in</h2>
                <div className={styles.logos}>
                    <img src={techCrunch} alt="Techcrunch logo" />
                    <img src={businessInsider} alt="Business Insider logo" />
                    <img src={newYorkTimes} alt="The New York Times logo" />
                    <img src={forbes} alt="Forbes logo" />
                    <img src={usaToday} alt="USA Today logo" />
                </div>
            </Container>
        </section>
    );
};

export default Featured;
