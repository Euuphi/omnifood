import React from "react";

/**
 * Create basic centered container
 *
 * @param {string} className - Additional classes for container
 * @param {string} maxWidth - Max width of the container - Default: 120rem
 * @param {string} marginTop - Value of margin-top property - Default: 0
 * @param {string} marginBottom - Value of margin-bottom property - Defualt: 0
 * @return {*}
 */

const Container = ({
    children,
    className,
    maxWidth,
    marginTop,
    marginBottom,
}) => {
    const containerStyles = {
        maxWidth,
        marginTop,
        marginRight: "auto",
        marginBottom,
        marginLeft: "auto",
        padding: "0 3.2rem",
    };

    return (
        <div className={className} style={containerStyles}>
            {children}
        </div>
    );
};

Container.defaultProps = {
    maxWidth: "120rem",
    marginTop: "0",
    marginBottom: "0",
};

export default Container;
