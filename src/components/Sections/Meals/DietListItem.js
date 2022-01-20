import React from "react";

// Icons
import { IoCheckmarkOutline } from "react-icons/io5";

// Components
import ListItem from "../../UI/ListItem";

const DietListItem = ({ dietName }) => {
    const colorPrimary = "#e67e22";

    return (
        <ListItem>
            <IoCheckmarkOutline color={colorPrimary} size="3rem" />
            <span>{dietName}</span>
        </ListItem>
    );
};

export default DietListItem;
