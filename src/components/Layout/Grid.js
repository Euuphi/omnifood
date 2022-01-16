import React from "react";

/**
 * Create a basic grid container
 *
 * @param {number} col - Number of columns
 * @param {number} row - Number of rows
 * @param {number} gap - Value of gap property (in rem)
 * @return {*}
 */

const Grid = ({ children, col, row, gap }) => {
    //Stylesheet
    const gridStyles = {
        display: "grid",
        gap: `${gap}rem`,
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`,
    };

    return <div style={gridStyles}>{children}</div>;
};

Grid.defaultProps = {
    gap: 9.6,
    row: 1,
};

export default Grid;
