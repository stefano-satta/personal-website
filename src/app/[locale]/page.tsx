import FirstHero from "@/components/feature/section-home/FirstHero";
import About from "@/components/feature/section-home/About";
import SideProjects from "@/components/feature/section-home/SideProjects";
import SlidingWorking from "@/components/feature/section-home/SlidingWorking";
import Contact from "@/components/feature/section-home/Contact";
import {Metadata} from "next";
import myMetadata from "@/utility/seo-metadata";

export const metadata: Metadata = {
    title: myMetadata.title,
    description: myMetadata.description,
    openGraph: {
        title: myMetadata.openGraph?.title,
        description: myMetadata.openGraph?.description,
    },
}


export default function Homepage() {

    return (
        <>
            <FirstHero/>
            <About/>
            <SideProjects/>
            <SlidingWorking/>
            <Contact/>
        </>
    )
}