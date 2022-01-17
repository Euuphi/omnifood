import React from "react";
import Container from "../Layout/Container";

// Stylesheets
import styles from "./How.module.css";

const How = () => {
    return (
        <secton className={styles.sectionHow}>
            <Container>
                <h1 className={styles.subheading}>How it works</h1>
            </Container>
        </secton>
    );
};

export default How;
