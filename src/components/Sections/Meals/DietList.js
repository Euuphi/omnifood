import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

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
                    return (
                        <ListItem
                            text={diet}
                            icon={
                                <IoCheckmarkOutline
                                    color="#e67e22"
                                    size="3rem"
                                />
                            }
                            key={diet}
                        />
                    );
                })}
            </List>
        </div>
    );
};

export default DietList;
