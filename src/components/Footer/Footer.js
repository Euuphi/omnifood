import React from "react";
import { useMediaQuery } from "@mui/material";

// Stylesheets
import styles from "./Footer.module.css";

// Icons
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
} from "react-icons/io5";

// Components
import Container from "../Layout/Container";
import Grid from "../Layout/Grid";
import Logo from "../UI/Logo";

const Footer = () => {
    const tabletScreen = useMediaQuery("(max-width: 75em)");
    const copyrightDate = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Container
                padding={`${tabletScreen ? "9.6rem" : "12.8rem"} 3.2rem`}>
                <Grid col="1.5fr 1.5fr 1fr 1fr 1fr">
                    <div className={styles.logoCol}>
                        <Logo className={styles.footerLogo} />
                        <ul className={styles.socialLinks}>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    <IoLogoInstagram size="2.4rem" />
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    <IoLogoFacebook size="2.4rem" />
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    <IoLogoTwitter size="2.4rem" />
                                </a>
                            </li>
                        </ul>
                        <p className={styles.copyright}>
                            Copyright &copy; {copyrightDate} by Omnifood, Inc.
                            All rights reserved.
                        </p>
                    </div>
                    <div className={styles.address}>
                        <p className={styles.footerHeading}>Contact us</p>
                        <address className={styles.contacts}>
                            <p className={styles.address}>
                                623 Harrison St., 2nd Floor, San Francisco, CA
                                94107
                            </p>
                            <p>
                                <a
                                    className={styles.footerLink}
                                    href="tel:415-201-6370 ">
                                    415-201-6370
                                </a>
                                <a
                                    className={styles.footerLink}
                                    href="mailto:hello@omnifood.com">
                                    hello@omnifood.com
                                </a>
                            </p>
                        </address>
                    </div>
                    <nav className={styles.nav}>
                        <p className={styles.footerHeading}>Account</p>
                        <ul className={styles.footerNav}>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    Create Account
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    Sign In
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    iOS App
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    Android App
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className={styles.nav}>
                        <p className={styles.footerHeading}>Company</p>
                        <ul className={styles.footerNav}>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    About Omnifood
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    For Business
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    Cooking Partners
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className={styles.nav}>
                        <p className={styles.footerHeading}>Resources</p>
                        <ul className={styles.footerNav}>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    Recipe directory
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    Help center
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="#">
                                    Privacy & terms
                                </a>
                            </li>
                        </ul>
                    </nav>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
