import NavHeader from "./Pages/NavHeader";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ServicePage from "./Pages/ServicePage";
import ContactUSPage from "./Pages/contactUsPage";
import Faq from "./Pages/Faq";

const Homepage =() => {
    return (
        <div className='overflowHidden'>
            <NavHeader/>
            <Home/>
            <AboutUs/>
            <ServicePage/>
            <ContactUSPage/>
            <Faq/>
        </div>

    )
};
export default Homepage;
