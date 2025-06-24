import NavBar from "./Navbar"
import Inicio from "./Inicio";
import ParaTi from "./ParaTi";
import Testimonios from "./Testimonios";
import ComoFunciona from "./ComoFunciona";
import CTA from "./CTA";
import Footer from "./Footer";
import AboutTeam from "./AboutTeam";


const HomePage = () => {
    return (
    <>
        <NavBar/>
        <Inicio/>
        <ParaTi/>
        <Testimonios/>
        <ComoFunciona/>
        <AboutTeam/>
        <CTA/>
        <Footer/>
    </>
    );
};

export default HomePage