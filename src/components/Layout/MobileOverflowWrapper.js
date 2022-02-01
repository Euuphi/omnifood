import React from "react";

import styles from "./MobileOverflowWrapper.module.css";

/**
 * Create compatable wrapper to hide overflow-x on mobile
 *
 * @param {*} children - Children for component to wrap
 * @return {*}
 */

const MobileOverflowWrapper = ({ children }) => {
    return <div className={styles.hidden}>{children}</div>;
};

export default MobileOverflowWrapper;
