import { Fragment, useEffect, useRef, useState } from "react";

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
    // ----- Refs ----- //
    // Ref to hero section
    const heroRef = useRef();

    // ----- States ----- //
    // State to track visibilty of hero section in the viewport
    const [heroVisible, setHeroVisible] = useState(true);

    // Effect to set and track visibility of hero section in the viewport
    useEffect(() => {
        const heroObserver = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setHeroVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
            }
        );

        if (heroRef.current) heroObserver.observe(heroRef.current);
    }, [heroRef]);

    return (
        <Fragment>
            <MainNav isSticky={!heroVisible} />
            <main>
                <Hero sectionRef={heroRef} />
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
