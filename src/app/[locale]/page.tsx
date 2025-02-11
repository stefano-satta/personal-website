import FirstHero from "@/components/feature/section-home/FirstHero";
import About from "@/components/feature/section-home/About";
import SideProjects from "@/components/feature/section-home/SideProjects";
import SlidingWorking from "@/components/feature/section-home/SlidingWorking";
import Contact from "@/components/feature/section-home/Contact";
import {Metadata} from "next";

const metadata: Metadata = {
    title: '',
    description: '',
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