import {Metadata, NextPage} from "next";
import ContactSection from "@/components/feature/section-about/ContactSection";
import MyMediaSection from "@/components/feature/section-about/MyMediaSection";
import WallTimeSection from "@/components/feature/section-about/WallTimeSection";
import MyServicesSection from "@/components/feature/section-about/MyServicesSection";
import MySelfTechSection from "@/components/feature/section-about/MySelfTechSection";

export const metadata: Metadata = {
    title: "Stefano Satta | Front-end developer",
    description: "Passionate front-end developer based in Italy. Focused on building responsive front-end web applications with modern technologies",
    openGraph: {
        title: 'Stefano Satta | Front-end developer',
        description: 'Passionate front-end developer based in Italy. Focused on building responsive front-end web applications with modern technologies',
    },
}


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