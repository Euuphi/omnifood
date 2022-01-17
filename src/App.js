import { Fragment } from "react";

import MainNav from "./components/Nav/MainNav";
import Hero from "./components/Sections/Hero/Hero";
import How from "./components/Sections/How/How";

function App() {
    return (
        <Fragment>
            <MainNav />
            <Hero />
            <How />
        </Fragment>
    );
}

export default App;
