import React from "react";

// Components
import HeadingTetiary from "../../Headings/HeadingTertiary";
import DietListItem from "./DietListItem";
import List from "../../UI/List";

const DietList = () => {
    const dietList = [
        "Vegetarian",
        "Vegan",
        "Pescatarian",
        "Gluten-free",
        "Lactose-free",
        "Keto",
        "Paleo",
        "Low FODMAP",
        "Kid-friendly",
    ];

    return (
        <div>
            <HeadingTetiary>Works with any diet</HeadingTetiary>
            <List>
                {dietList.map((diet) => {
                    return <DietListItem dietName={diet} key={diet} />;
                })}
            </List>
        </div>
    );
};

export default DietList;
