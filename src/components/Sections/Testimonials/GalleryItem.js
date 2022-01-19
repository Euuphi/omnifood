import React from "react";

// Stylesheets
import styles from "./GalleryItem.module.css";

/**
 * Create figure element with image
 *
 * @param {*} imageSrc - Image source
 * @param {*} imageAlt - Image alt text
 * @return {*}
 */

const GalleryItem = ({ imageSrc, imageAlt }) => {
    return (
        <figure className={styles.galleryItem}>
            <img src={imageSrc} alt={imageAlt} />
        </figure>
    );
};

export default GalleryItem;
