import React from "react";
import { useMediaQuery } from "@mui/material";

/**
 * Create a basic grid container
 *
 * @param {number|string} col - Input number to specify evenly fractioned columns or input string to specify value for grid-template-column property
 * @param {number|string} row - Input number to specify evenly fractioned rows or input string to specify value for grid-template-row property
 * @param {string} gap - Value of gap property - Default: "9.6rem"
 * @param {string} alignItems - Value of align-items - Default: "stretch"
 * @param {string} justifyContent - Value of justify-content - Default: "start"
 * @param {string} padding - Value of padding
 * @return {*}
 */

const Grid = ({
    children,
    col,
    row,
    gap,
    alignItems,
    justifyContent,
    padding,
}) => {
    // Function to calculate and return gap value based on screen size
    const largeTabletScreen = useMediaQuery("(max-width: 75em)");
    const smallTabletScreen = useMediaQuery("(max-width: 59em)");
    const calculateGap = () => {
        if (smallTabletScreen) {
            // Gap for small tablet screen
            return "4.8rem";
        } else if (largeTabletScreen) {
            // Gap for large tablet screen
            return "6.4rem";
        } else {
            // Default gap
            return "9.6rem";
        }
    };

    // Define default gap values
    let gapValue = gap || calculateGap();

    // Allow inputs for non equal grid-template-column
    const colTemplate = isNaN(col) ? col : `repeat(${col}, 1fr)`;
    const rowTemplate = isNaN(row) ? row : `repeat(${row}, 1fr)`;

    //Stylesheet
    const gridStyles = {
        display: "grid",
        alignItems,
        gap: gapValue,
        gridTemplateColumns: colTemplate,
        gridTemplateRows: rowTemplate,
        justifyContent,
        padding,
    };

    return <div style={gridStyles}>{children}</div>;
};

Grid.defaultProps = {
    alignItems: "stretch",
    justifyContent: "start",
    row: 1,
};

export default Grid;
