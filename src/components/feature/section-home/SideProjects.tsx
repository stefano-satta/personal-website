"use client"

import CategoryTitleCard from "@/components/common/cards/CategoryTitleCard";
import SPCard from "@/components/common/cards/ProjectCard";
import TitleCard from "@/components/common/cards/TitleCard";
import {SIDE_PROJECTS} from "@/utility/projects-list";
import Image from "next/image";
import FakezonStoreTemplateImg from '../../../../public/ecommerce.png';
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import {Col, Container, Row} from "react-bootstrap";
import {useTranslations} from "next-intl";
import LottieAnimationICountry from "@/components/common/lottie-animation/LottieAnimationICountry";


const SideProjects = () => {
    const [currentPortfolio, fakezonProject, honeyProject, cryptoProject, icountryProject] = SIDE_PROJECTS;
    const t = useTranslations('homepage.projects');

    return (
        <section className="bg-black">
            <Container className="overflow-hidden" as="section" id="side-projects-hero">
                <TitleSection title={t('title')} className="font-archivo-black text-white text-center"/>
                <p className="fs-2 mb-5 text-white text-center">{t('subTitle')}</p>
                <Row className="row-cols-2 pt-4 justify-content-between">
                    <Col xs={12} md={6} className="mb-4">
                        <SPCard className="text-white current-portfolio" infoProject={currentPortfolio}>
                            <CategoryTitleCard categoryTitle={currentPortfolio.category} className="fw-bold"/>
                            <TitleCard title={currentPortfolio.name} className="gradient-red font-archivo-black"/>
                        </SPCard>
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                        <SPCard className="bg-orange text-white" infoProject={fakezonProject}>
                            <CategoryTitleCard categoryTitle={fakezonProject.category} className="fw-bold"/>
                            <TitleCard title={fakezonProject.name} className="font-archivo-black"/>
                            <Image src={FakezonStoreTemplateImg} alt="fakezon_website_project" width={300}  priority className="pb-2 h-auto"/>
                        </SPCard>
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                        <SPCard infoProject={honeyProject} className="bg-grey text-white honey-project">
                            <CategoryTitleCard categoryTitle={honeyProject.category} className="fw-bold"/>
                            <TitleCard title={honeyProject.name} className="font-archivo-black"/>
                        </SPCard>
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                        <SPCard infoProject={cryptoProject} className="crypto-project">
                            <CategoryTitleCard categoryTitle={cryptoProject.category} className="fw-bold text-white"/>
                            <TitleCard title={cryptoProject.name} className="font-archivo-black text-white"/>
                        </SPCard>
                    </Col>
                    <Col xs={12} md={6} className="mb-4">
                        <SPCard className="bg-blue text-white" infoProject={icountryProject}>
                            <CategoryTitleCard categoryTitle={icountryProject.category} className="fw-bold"/>
                            <TitleCard title={icountryProject.name} className="font-archivo-black"/>
                            <LottieAnimationICountry/>
                        </SPCard>
                    </Col>
                </Row>














            </Container>
        </section>
    )
}

export default SideProjects;