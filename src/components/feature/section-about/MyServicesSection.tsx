import {Col, Container, Row} from "react-bootstrap";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import {myServices} from "@/utility/my-services";
import React from "react";


const MyServicesSection = () => {

    return (
        <section className="bg-black" id="my-services-section">
            <Container className="text-white">
                <TitleSection title={'My services.'} className="fs-title-section mb-5 pb-5"/>
                {
                    myServices.map((service: IServices, index: number) => (
                        <React.Fragment key={index}>
                            <Row className="py-5 mb-3 fs-4">
                                <Col xs={2} lg={2}>{service.numCategory}</Col>
                                <Col xs={10} lg={4}>{service.category}</Col>
                                <Col xs={12} lg={6}>{service.description}</Col>
                            </Row>
                            <hr className="border-bottom border-white"/>
                        </React.Fragment>
                    ))
                }
            </Container>
        </section>
    )
}

export default MyServicesSection;