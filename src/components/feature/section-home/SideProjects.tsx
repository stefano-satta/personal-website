"use client"

import CategoryTitleCard from "@/components/common/cards/CategoryTitleCard";
import SPCard from "@/components/common/cards/ProjectCard";
import TitleCard from "@/components/common/cards/TitleCard";
import {SIDE_PROJECTS} from "@/utility/projects-list";
import Image from "next/image";
import cryptoTemplateImg from '../../../../public/crypto_template.png';
import Website22TemplateImg from '../../../../public/website22_template.png';
import ICountryTemplateImg from '../../../../public/travel_bg.png';
import CarRentalTemplateImg from '../../../../public/car-rental.png';
import MySite23Img from '../../../../public/mysite23.png';
import HoneyWebsiteImg from '../../../../public/honey_bottle.png';
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper/modules';
import { Container } from "react-bootstrap";
import {useTranslations} from "next-intl";


const SideProjects = () => {
    const [currentPortfolio, honeyProject, cryptoProject, websiteProject, goRightsProject, iCountryProject] = SIDE_PROJECTS;
    const t = useTranslations('homepage.projects');
    return (
        <Container className="overflow-hidden" as="section" id="side-projects-hero">
            <TitleSection title={t('title')}/>
            <p className="fs-2 mb-3">{t('subTitle')}</p>

            <Swiper
                breakpoints={{
                    320: {slidesPerView: 1, spaceBetween: 60},
                    768: {slidesPerView: 1.5, spaceBetween: 10},
                    992: {slidesPerView: 3.2, spaceBetween: 20}
                }}
                centeredSlides={false}
                pagination={{clickable: true}}
                simulateTouch
                navigation={true}
                modules={[Navigation]}
                id="slider-projects"
            >
                <SwiperSlide>
                    <SPCard className="bg-black text-white" infoProject={currentPortfolio}>
                        <CategoryTitleCard categoryTitle={currentPortfolio.category}/>
                        <TitleCard title={currentPortfolio.name} className="gradient-red"/>
                        <Image src={MySite23Img} alt="portfolio_template_project" width={300} priority className="mt-5"/>
                    </SPCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SPCard infoProject={honeyProject}>
                        <CategoryTitleCard categoryTitle={honeyProject.category}/>
                        <TitleCard title={honeyProject.name}/>
                        <Image src={HoneyWebsiteImg} alt="honey_website_project" width={300}  priority className="pb-2 h-auto"/>
                    </SPCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SPCard infoProject={cryptoProject}>
                        <CategoryTitleCard categoryTitle={cryptoProject.category}/>
                        <TitleCard title={cryptoProject.name}/>
                        <Image src={cryptoTemplateImg} alt="crypto_template_project" width={300} priority/>
                    </SPCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SPCard infoProject={iCountryProject}>
                        <CategoryTitleCard categoryTitle={iCountryProject.category}/>
                        <TitleCard title={iCountryProject.name}/>
                        <Image src={ICountryTemplateImg} alt="translation_template_project" width={320} priority/>
                    </SPCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SPCard className="bg-black text-white" infoProject={websiteProject}>
                        <CategoryTitleCard categoryTitle={websiteProject.category}/>
                        <TitleCard title={websiteProject.name}/>
                        <Image src={Website22TemplateImg} alt="portfolio_template_project" width={320} priority/>
                    </SPCard>
                </SwiperSlide>
                <SwiperSlide>
                    <SPCard className="bg-black text-white" infoProject={goRightsProject}>
                        <CategoryTitleCard categoryTitle={goRightsProject.category}/>
                        <TitleCard title={goRightsProject.name}/>
                        <Image src={CarRentalTemplateImg} alt="music_template_project" width={320} priority/>
                    </SPCard>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default SideProjects;