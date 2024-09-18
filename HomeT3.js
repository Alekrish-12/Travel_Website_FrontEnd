import Destination from "./Destination";
import HeroT from "./HeroT";
import NavbarT1 from "./NavbarT1";
import Trip from "./Trip";
import FooterT from "./FooterT";

function HomeT3(){
    return(
        <>
        <NavbarT1/>
        <HeroT 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <FooterT/>
        
        </>
    );

}
export default HomeT3;