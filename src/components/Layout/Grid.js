import React from "react";

/**
 * Create a basic grid container
 *
 * @param {number} col - Number of columns
 * @param {number} row - Number of rows
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
    //Stylesheet
    const gridStyles = {
        display: "grid",
        alignItems,
        gap,
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
        justifyContent,
        padding,
    };

    return <div style={gridStyles}>{children}</div>;
};

Grid.defaultProps = {
    alignItems: "stretch",
    justifyContent: "start",
    gap: "9.6rem",
    row: 1,
};

export default Grid;
