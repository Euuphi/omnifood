import { Fragment } from "react";

// Landing Page Sections
import MainNav from "./components/Nav/MainNav";
import Hero from "./components/Sections/Hero/Hero";
import Featured from "./components/Sections/Featured/Featured";
import How from "./components/Sections/How/How";

function App() {
    return (
        <Fragment>
            <MainNav />
            <Hero />
            <Featured />
            <How />
        </Fragment>
    );
}

export default App;
