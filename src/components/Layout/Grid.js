import React from "react";

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
    const colTemplate = isNaN(col) ? col : `repeat(${col}, 1fr)`;
    const rowTemplate = isNaN(row) ? row : `repeat(${row}, 1fr)`;

    //Stylesheet
    const gridStyles = {
        display: "grid",
        alignItems,
        gap,
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
    gap: "9.6rem",
    row: 1,
};

export default Grid;
