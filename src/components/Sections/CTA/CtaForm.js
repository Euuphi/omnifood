import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";

// Stylesheets
import styles from "./CtaForm.module.css";

// Components
import Grid from "../../Layout/Grid";
import Button from "../../UI/Button";

const CtaForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [select, setSelect] = useState("");

    const smallTabletScreen = useMediaQuery("(max-width: 59em)");

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(select);
    };

    return (
        <form className={styles.ctaForm} onSubmit={submitHandler}>
            <Grid col={smallTabletScreen ? 1 : 2} gap="2.4rem 3.2rem">
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        required
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        required
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                </div>

                <div>
                    <label htmlFor="selectWhere">
                        Where did you hear from us?
                    </label>
                    <select
                        id="selectWhere"
                        required
                        value={select}
                        onChange={(event) => setSelect(event.target.value)}>
                        <option value="">Please choose one option:</option>
                        <option value="friends">Friends and Family</option>
                        <option value="youtube">YouTube</option>
                        <option value="podcast">Podcast</option>
                        <option value="facebook">Facebook ad</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <Button text="Sign Up" className={styles.btnForm} />
            </Grid>
        </form>
    );
};

export default CtaForm;
