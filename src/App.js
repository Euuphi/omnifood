import { Fragment } from "react";

// Landing Page Section Components
import MainNav from "./components/Nav/MainNav";
import Hero from "./components/Sections/Hero/Hero";
import Featured from "./components/Sections/Featured/Featured";
import How from "./components/Sections/How/How";
import Meals from "./components/Sections/Meals/Meals";
import Testimonials from "./components/Sections/Testimonials/Testimonials";

function App() {
    return (
        <Fragment>
            <MainNav />
            <Hero />
            <Featured />
            <How />
            <Meals />
            <Testimonials />
        </Fragment>
    );
}

export default App;
