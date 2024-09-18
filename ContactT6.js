import HeroT from "./HeroT";
import NavbarT1 from "./NavbarT1";
import AboutImg from "./assets/img2.jpg"
import FooterT from "./FooterT";
import ContactForm from "./ContactForm";
function ContactT6(){
    return(
        <>
        <NavbarT1/>
        <HeroT cName="hero-mid" heroImg={AboutImg} title="Contact" btnClass="hide"/>
        <ContactForm/>
        <FooterT/>
        </>
    )

}
export default ContactT6;