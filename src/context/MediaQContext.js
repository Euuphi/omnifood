import React from "react";
import { useMediaQuery } from "@mui/material";

const createMediaQ = () => {
    const MediaQContext = React.createContext();

    const MediaQProvider = ({ children }) => {
        // -------- Media Queries --------//
        // Max-width calculated using: Screen pixel / 16 - eg. 1344/16 = 84em
        const laptopScreen = useMediaQuery("(max-width: 84em)"); // 1344px
        const landscapeTabletScreen = useMediaQuery("(max-width: 75em)"); // 1200px
        const portraitTabletScreen = useMediaQuery("(max-width: 59em)"); // 944px
        const smallTabletScreen = useMediaQuery("(max-width: 47em)"); // 752px
        const mobileScreen = useMediaQuery("(max-width: 34em)"); // 544px

        return (
            <MediaQContext.Provider
                value={{
                    laptopScreen,
                    landscapeTabletScreen,
                    portraitTabletScreen,
                    smallTabletScreen,
                    mobileScreen,
                }}>
                {children}
            </MediaQContext.Provider>
        );
    };

    return { MediaQContext, MediaQProvider };
};

export const { MediaQContext, MediaQProvider } = createMediaQ();
