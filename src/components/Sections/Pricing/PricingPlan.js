import React from "react";

// Stylesheet
import styles from "./PricingPlan.module.css";

// Icons
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

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
 * @param {string[]} planBenefits - Array of benefits to display in list
 * @param {string[]} planConstraints - Array of constraints to display in list
 * @param {string} className - Add className for additional styling
 * @return {*}
 */

const PricingPlan = ({
    name,
    price,
    text,
    planBenefits,
    planConstraints,
    className,
}) => {
    return (
        <div className={`${styles.pricingPlan} ${className}`}>
            <header className={styles.planHeader}>
                <p className={styles.planName}>{name}</p>
                <p className={styles.planPrice}>
                    <span>$</span>
                    {price}
                </p>
                <p className={styles.planText}>{text}</p>
            </header>
            <List className={styles.pricingDetails}>
                {planBenefits.map((benefit) => {
                    return (
                        <ListItem
                            text={benefit}
                            icon={
                                <IoCheckmarkOutline
                                    color="#e67e22"
                                    size="3rem"
                                />
                            }
                            key={benefit}
                        />
                    );
                })}
                {planConstraints &&
                    planConstraints.map((constraint) => {
                        return (
                            <ListItem
                                text={constraint}
                                icon={
                                    <IoCloseOutline color="#666" size="3rem" />
                                }
                                key={constraint}
                            />
                        );
                    })}
            </List>
            <Button
                className={styles.planSignUp}
                href="#"
                text="Start eating well"
                preStyle="full"
            />
        </div>
    );
};

export default PricingPlan;
