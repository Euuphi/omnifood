import { Fragment } from "react";

import MainNav from "./components/Nav/MainNav";
import Hero from "./components/Hero/Hero";
import How from "./components/How/How";

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
