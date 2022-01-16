import React from "react";

/**
 * Create a basic grid container
 *
 * @param {number} col - Number of columns
 * @param {number} row - Number of rows
 * @param {number} gap - Value of gap property (in rem) - Default: 9.6rem
 * @return {*}
 */

const Grid = ({ children, col, row, gap, alignItems, justifyContent }) => {
    //Stylesheet
    const gridStyles = {
        display: "grid",
        alignItems,
        gap: `${gap}rem`,
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
        justifyContent,
    };

    return <div style={gridStyles}>{children}</div>;
};

Grid.defaultProps = {
    alignItems: "stretch",
    justifyContent: "start",
    gap: 9.6,
    row: 1,
};

export default Grid;
