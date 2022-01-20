import React from "react";

// Components
import HeadingTetiary from "../../Headings/HeadingTertiary";
import List from "../../UI/List";
import ListItem from "../../UI/ListItem";

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
                    return <ListItem text={diet} icon key={diet} />;
                })}
            </List>
        </div>
    );
};

export default DietList;
