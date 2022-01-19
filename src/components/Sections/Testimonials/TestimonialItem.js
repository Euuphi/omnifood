import React from "react";

//Stylesheets
import styles from "./TestimonialItem.module.css";

/**
 * Create figure element with image and blockquote
 *
 * @param {string} author - Testimonial author
 * @param {string} imageSrc - Image source (Image of author)
 * @param {string} imageAlt - Image alt text
 * @param {string} quote - Author's quote
 * @return {*}
 */

const TestimonialItem = ({ author, imageSrc, imageAlt, quote }) => {
    return (
        <figure className={styles.testimonial}>
            <img
                className={styles.testimonialImage}
                src={imageSrc}
                alt={imageAlt}
            />
            <blockquote className={styles.testimonialText}>{quote}</blockquote>
            <p className={styles.testimonialName}>&mdash; {author}</p>
        </figure>
    );
};

export default TestimonialItem;
