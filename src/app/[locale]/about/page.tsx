import {Metadata, NextPage} from "next";
import ContactSection from "@/components/feature/section-about/ContactSection";
import MyMediaSection from "@/components/feature/section-about/MyMediaSection";
import WallTimeSection from "@/components/feature/section-about/WallTimeSection";
import MyServicesSection from "@/components/feature/section-about/MyServicesSection";
import MySelfTechSection from "@/components/feature/section-about/MySelfTechSection";
import myMetadata from "@/utility/seo-metadata";

export const metadata: Metadata = {
    title: myMetadata.title,
    description: myMetadata.description,
    openGraph: {
        title: myMetadata.openGraph?.title,
        description: myMetadata.openGraph?.description,
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