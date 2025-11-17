import React from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Story from "./components/story";
import Plans from "./components/plans";
import Faqs from "./components/faqs";
import Footer from "./components/footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Services />
            <Story />
            {/* <Plans /> */}
            <Faqs />
            <Footer />
        </>
    );
};

export default App;
