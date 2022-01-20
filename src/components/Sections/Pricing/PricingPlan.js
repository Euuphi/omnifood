import React from "react";

// Stylesheet
import styles from "./PricingPlan.module.css";

// Components
import Button from "../../UI/Button";
import List from "../../UI/List";
import ListItem from "../../UI/ListItem";

const PricingPlan = () => {
    return (
        <div className={styles.pricingPlan}>
            <p className={styles.planName}>Starter</p>
            <p className={styles.planprice}>
                <span>$</span>399
            </p>
            <p className={styles.planText}>per month. Only $13 per meal</p>
            <List>
                <ListItem>
                    <span>1 meal per day</span>
                </ListItem>
                <ListItem>
                    <span>Order times are between 11am and 9pm</span>
                </ListItem>
                <ListItem>
                    <span>Delivery is free</span>
                </ListItem>
            </List>
            <Button href="#" text="Start eating well" />
        </div>
    );
};

export default PricingPlan;
