import { NextPage } from "next";
import ContactSection from "@/components/feature/section-about/ContactSection";
import MyMediaSection from "@/components/feature/section-about/MyMediaSection";
import WallTimeSection from "@/components/feature/section-about/WallTimeSection";
import MyServicesSection from "@/components/feature/section-about/MyServicesSection";
import MySelfTechSection from "@/components/feature/section-about/MySelfTechSection";


const About: NextPage = () => {

    return (
        <>
            <WallTimeSection/>
            <MySelfTechSection/>
            <MyServicesSection/>
            <MyMediaSection/>
            <ContactSection/>
        </>
    )
}

export default About;