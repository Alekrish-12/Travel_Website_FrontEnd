import HeroT from "./HeroT";
import NavbarT1 from "./NavbarT1";
import AboutImg from "./assets/img1.jpg"
import FooterT from "./FooterT";
import AboutUs from "./AboutUs";

function AboutT5(){
    return(
        <>
        <NavbarT1/>
        <HeroT cName="hero-mid" heroImg={AboutImg} title="About" btnClass="hide"/>
        <AboutUs/>
        <FooterT/>
        </>
    );

}
export default AboutT5;