import FirstHero from "@/components/feature/section-home/FirstHero";
import About from "@/components/feature/section-home/About";
import SideProjects from "@/components/feature/section-home/SideProjects";
import SlidingWorking from "@/components/feature/section-home/SlidingWorking";
import Contact from "@/components/feature/section-home/Contact";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Stefano Satta | Front-end developer",
    description: "Passionate front-end developer based in Italy. Focused on building responsive front-end web applications with modern technologies",
    openGraph: {
        title: 'Stefano Satta | Front-end developer',
        description: 'Passionate front-end developer based in Italy. Focused on building responsive front-end web applications with modern technologies',
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