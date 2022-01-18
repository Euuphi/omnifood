import React from "react";

/**
 * Create a basic flex container
 *
 * @param {"row" || "column"} flexDirection - Value of flex-direction - Default: row
 * @param {string} alignItems - Value of align-items property - Default: stretch
 * @param {string} justifyContent - Value of justify-content property - Default: flex-start
 * @param {number} gap - Value of gap property (in rem) - Default: 9.6rem
 * @return {*}
 */
const Flex = ({ children, flexDirection, alignItems, justifyContent, gap }) => {
    const flexStyles = {
        display: "flex",
        flexDirection,
        alignItems,
        justifyContent,
        gap: `${gap}rem`,
    };

    return <div style={flexStyles}>{children}</div>;
};

Flex.defaultProps = {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
    gap: 9.6,
};

export default Flex;
