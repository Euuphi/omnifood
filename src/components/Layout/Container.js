import React from "react";

/**
 * Create basic centered container
 *
 * @param {number}  maxWidth - Max width of the container (in rem) - Default: 120rem
 * @return {*}
 */

const Container = ({ children, maxWidth }) => {
    const containerStyles = {
        maxWidth: `${maxWidth}rem`,
        margin: "0 auto",
        padding: "0 3.2rem",
    };

    return <div style={containerStyles}>{children}</div>;
};

Container.defaultProps = {
    maxWidth: 120,
};

export default Container;
