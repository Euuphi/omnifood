import React from "react";

// Stylesheets
import styles from "./Footer.module.css";

// Components
import Container from "../Layout/Container";
import Grid from "../Layout/Grid";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container padding="9.6rem 0">
                <Grid col={5}>
                    <div className={styles.logo}>Logo</div>
                    <div className={styles.address}>Address</div>
                    <nav className={styles.nav}>Nav 1</nav>
                    <nav className={styles.nav}>Nav 2</nav>
                    <nav className={styles.nav}>Nav 3</nav>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
