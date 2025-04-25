import NavBar from "./Navbar"
import Inicio from "./Inicio";
import ParaTi from "./ParaTi";
import Testimonials from "./Testimonios";
import ComoFunciona from "./ComoFunciona";
import CTA from "./CTA";
import Footer from "./Footer";


const HomePage = () => {
    return (
    <>
        <NavBar/>
        <Inicio/>
        <ParaTi/>
        <Testimonials/>
        <ComoFunciona/>
        <CTA/>
        <Footer/>
    </>
    );
};

export default HomePage