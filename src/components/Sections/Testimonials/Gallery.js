import React, { useContext } from "react";

// Contexts
import { MediaQContext } from "../../../context/MediaQContext";

// Images
import galleryOne from "../../../images/gallery/gallery-1.jpg";
import galleryTwo from "../../../images/gallery/gallery-2.jpg";
import galleryThree from "../../../images/gallery/gallery-3.jpg";
import galleryFour from "../../../images/gallery/gallery-4.jpg";
import galleryFive from "../../../images/gallery/gallery-5.jpg";
import gallerySix from "../../../images/gallery/gallery-6.jpg";
import gallerySeven from "../../../images/gallery/gallery-7.jpg";
import galleryEight from "../../../images/gallery/gallery-8.jpg";
import galleryNine from "../../../images/gallery/gallery-9.jpg";
import galleryTen from "../../../images/gallery/gallery-10.jpg";
import galleryEleven from "../../../images/gallery/gallery-11.jpg";
import galleryTwelve from "../../../images/gallery/gallery-12.jpg";

// Components
import Grid from "../../Layout/Grid";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
    //TODO: Look into creating carasoul for gallery on large tablet size

    // Media Queries
    const { landscapeTabletScreen, portraitTabletScreen, mobileScreen } =
        useContext(MediaQContext);

    // Function to calculate number of column based on screen size
    const calculateCols = () => {
        if (mobileScreen) {
            return 4;
        } else if (portraitTabletScreen) {
            return 6;
        } else if (landscapeTabletScreen) {
            return 2;
        } else {
            return 3;
        }
    };

    return (
        <Grid
            col={calculateCols()}
            gap={mobileScreen ? "1.2rem" : "1.6rem"}
            padding="1.6rem">
            <GalleryItem
                imageSrc={galleryOne}
                imageAlt="Beautifully arranged food"
            />
            <GalleryItem
                imageSrc={galleryTwo}
                imageAlt="Beautifully arranged food"
            />
            <GalleryItem
                imageSrc={galleryThree}
                imageAlt="Beautifully arranged food"
            />
            <GalleryItem
                imageSrc={galleryFour}
                imageAlt="Beautifully arranged food"
            />
            {(landscapeTabletScreen && !portraitTabletScreen) || (
                <GalleryItem
                    imageSrc={galleryFive}
                    imageAlt="Beautifully arranged food"
                />
            )}
            <GalleryItem
                imageSrc={gallerySix}
                imageAlt="Beautifully arranged food"
            />
            <GalleryItem
                imageSrc={gallerySeven}
                imageAlt="Beautifully arranged food"
            />
            {(landscapeTabletScreen && !portraitTabletScreen) || (
                <>
                    <GalleryItem
                        imageSrc={galleryEight}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryNine}
                        imageAlt="Beautifully arranged food"
                    />
                    <GalleryItem
                        imageSrc={galleryTen}
                        imageAlt="Beautifully arranged food"
                    />
                </>
            )}
            <GalleryItem
                imageSrc={galleryEleven}
                imageAlt="Beautifully arranged food"
            />
            <GalleryItem
                imageSrc={galleryTwelve}
                imageAlt="Beautifully arranged food"
            />
        </Grid>
    );
};

export default Gallery;
