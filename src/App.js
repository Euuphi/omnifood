import { Fragment } from "react";

// Landing Page Section Components
import MainNav from "./components/Nav/MainNav";
import Hero from "./components/Sections/Hero/Hero";
import Featured from "./components/Sections/Featured/Featured";
import How from "./components/Sections/How/How";
import Meals from "./components/Sections/Meals/Meals";
import TestimonialsSection from "./components/Sections/Testimonials/TestimonialsSection";
import Pricing from "./components/Sections/Pricing/Pricing";
import CTA from "./components/Sections/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Fragment>
            <MainNav />
            <main>
                <Hero />
                <Featured />
                <How />
                <Meals />
                <TestimonialsSection />
                <Pricing />
                <CTA />
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
