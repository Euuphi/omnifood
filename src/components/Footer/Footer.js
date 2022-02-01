import React, { useContext } from "react";

// Contexts
import { MediaQContext } from "../../context/MediaQContext";

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
    // Media Queries
    const { landscapeTabletScreen, portraitTabletScreen } =
        useContext(MediaQContext);

    // Get date for copy right text
    const copyrightDate = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <Container
                padding={`${
                    landscapeTabletScreen ? "9.6rem" : "12.8rem"
                } 3.2rem`}>
                <Grid
                    col={portraitTabletScreen ? 6 : "1.5fr 1.5fr 1fr 1fr 1fr"}
                    gap={portraitTabletScreen ? "8rem 4.8rem" : "4.8rem"}>
                    <div className={styles.logoCol}>
                        <Logo className={styles.footerLogo} />
                        <ul className={styles.socialLinks}>
                            <li>
                                <a
                                    className={styles.footerLink}
                                    href="http://instagram.com">
                                    <IoLogoInstagram size="2.4rem" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.footerLink}
                                    href="http://facebook.com">
                                    <IoLogoFacebook size="2.4rem" />
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.footerLink}
                                    href="http://twitter.com">
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
                                <a className={styles.footerLink} href="/signup">
                                    Create Account
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="/signin">
                                    Sign In
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="/ios">
                                    iOS App
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.footerLink}
                                    href="/android">
                                    Android App
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className={styles.nav}>
                        <p className={styles.footerHeading}>Company</p>
                        <ul className={styles.footerNav}>
                            <li>
                                <a className={styles.footerLink} href="/about">
                                    About Omnifood
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.footerLink}
                                    href="/business">
                                    For Business
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.footerLink}
                                    href="/partners">
                                    Cooking Partners
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.footerLink}
                                    href="/careers">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <nav className={styles.nav}>
                        <p className={styles.footerHeading}>Resources</p>
                        <ul className={styles.footerNav}>
                            <li>
                                <a
                                    className={styles.footerLink}
                                    href="/recipes">
                                    Recipe directory
                                </a>
                            </li>
                            <li>
                                <a className={styles.footerLink} href="/help">
                                    Help center
                                </a>
                            </li>
                            <li>
                                <a
                                    className={styles.footerLink}
                                    href="/privacy">
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
