import HeroT from "./HeroT";
import NavbarT1 from "./NavbarT1";
import AboutImg from "./assets/img1.jpg"
import FooterT from "./FooterT";
import Trip from "./Trip";

function ServiceT4(){
    return(
        <>
        <NavbarT1/>
        <HeroT cName="hero-mid" heroImg={AboutImg} title="Service" btnClass="hide"/>
        <Trip/>
        <FooterT/>
        </>
    )

}
export default ServiceT4;