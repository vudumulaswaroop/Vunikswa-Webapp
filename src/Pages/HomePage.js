import NavHeader from "./NavHeader";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ServicePage from "./ServicePage";
import ContactUSPage from "./contactUsPage";
import Faq from "./Faq";

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
