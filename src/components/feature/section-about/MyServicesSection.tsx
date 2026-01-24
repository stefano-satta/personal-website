import {Col, Container, Row} from "react-bootstrap";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import React from "react";
import {useTranslations} from "next-intl";


const MyServicesSection = () => {
    const t = useTranslations('aboutPage.myServices');

    return (
        <section className="bg-black" id="my-services-section">
            <Container className="text-white bg-blue rounded-5 p-3 p-md-5">
                <TitleSection title={t('title')} className="fs-title-section mb-5 pb-5 font-archivo-black text-center"/>
                <Row className="py-5 mb-3 fs-4">
                    <Col xs={2} lg={2}>01</Col>
                    <Col xs={10} lg={4}>{t('category.webDev.title')}</Col>
                    <Col xs={12} lg={6}>{t('category.webDev.description')}</Col>
                </Row>
                <hr className="border-bottom border-white"/>
                <Row className="py-5 mb-3 fs-4">
                    <Col xs={2} lg={2}>02</Col>
                    <Col xs={10} lg={4}>{t('category.ecommerce.title')}</Col>
                    <Col xs={12} lg={6}>{t('category.ecommerce.description')}</Col>
                </Row>
                <hr className="border-bottom border-white "/>
                <Row className="py-5 mb-3 fs-4">
                    <Col xs={2} lg={2}>03</Col>
                    <Col xs={10} lg={4}>{t('category.webApplications.title')}</Col>
                    <Col xs={12} lg={6}>{t('category.webApplications.description')}</Col>
                </Row>
            </Container>
        </section>
    )
}

export default MyServicesSection;