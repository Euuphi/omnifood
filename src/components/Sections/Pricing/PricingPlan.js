import React from "react";

// Stylesheet
import styles from "./PricingPlan.module.css";

// Components
import Button from "../../UI/Button";
import List from "../../UI/List";
import ListItem from "../../UI/ListItem";

/**
 * Pricing plan card component
 *
 * @param {string} name - Plan name
 * @param {number} price - Plan price
 * @param {string} text - Additional text for plan
 * @param {string[]} details - Array of details to display in list
 * @return {*}
 */

const PricingPlan = ({ name, price, text, details }) => {
    return (
        <div className={styles.pricingPlan}>
            <header className={styles.planHeader}>
                <p className={styles.planName}>{name}</p>
                <p className={styles.planPrice}>
                    <span>$</span>
                    {price}
                </p>
                <p className={styles.planText}>{text}</p>
            </header>
            <List className={styles.pricingDetails}>
                {details.map((detail) => {
                    return <ListItem text={detail} icon key={detail} />;
                })}
            </List>
            <Button
                className={styles.planSignUp}
                href="#"
                text="Start eating well"
            />
        </div>
    );
};

export default PricingPlan;
