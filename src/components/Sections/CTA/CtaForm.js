import React from "react";

// Stylesheets
import styles from "./CtaForm.module.css";

// Components
import Grid from "../../Layout/Grid";

const CtaForm = () => {
    return (
        <form className={styles.ctaForm}>
            <Grid col={2} gap="2.4rem 3.2rem">
                <div>
                    <label for="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        required
                    />
                </div>

                <div>
                    <label for="email">Email adress</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        required
                    />
                </div>

                <div>
                    <label for="selectWhere">Where did you hear from us?</label>
                    <select id="selectWhere" required>
                        <option value="">
                            Please choose one of the follow options:
                        </option>
                        <option value="friends">Friends and Family</option>
                        <option value="youtube">YouTube</option>
                        <option value="podcast">Podcast</option>
                        <option value="facebook">Facebook ad</option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <button>Sign Up</button>
            </Grid>
        </form>
    );
};

export default CtaForm;
