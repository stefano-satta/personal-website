"use client"
import {Col, Container, Row} from "react-bootstrap";
import {useTranslations} from "next-intl";
import ButtonCustom from "@/components/common/button-custom/ButtonCustom";
import AnimatedCounter from "@/components/common/animated-counter/AnimatedCounter";
import {useRouter} from '@/i18n/routing';


const About = () => {
    const t = useTranslations('homepage.whatIDo');
    const router = useRouter();

    const goToAboutPage = () => {
        router.push('/about');
    }

    return (
        <section className="bg-black" id="about-section-hero">
            <Container as="div" className="">
                <p className="text-center text-white fs-4 text-wrap-balance mb-5" dangerouslySetInnerHTML={{__html: t.raw('welcomeMessage')}}></p>
                <p className="text-center text-white fs-4 text-wrap-balance" dangerouslySetInnerHTML={{__html: t.raw('subMessage')}}></p>
                <ButtonCustom label={"About me"} className="mx-auto mt-5" onClickAction={goToAboutPage}/>
                <Row className="mt-5 flex-wrap flex-none">
                    <Col xs="12" md="4" className="sm-px-2">
                        <div className="box d-flex flex-column align-items-start justify-content-between text-white">
                            <div className="box-data">
                                <AnimatedCounter from={0} to={Number(t('box.experience.data'))}/>+
                            </div>
                            <div className="box-title">{t('box.experience.title')}</div>
                        </div>
                    </Col>
                    <Col xs="12" md="4">
                        <div className="box d-flex flex-column align-items-start justify-content-between text-white">
                            <div className="box-data">
                                <AnimatedCounter from={0} to={Number(t('box.project.data'))}/>+
                            </div>
                            <div className="box-title">{t('box.project.title')}</div>
                        </div>
                    </Col>
                    <Col xs="12" md="4">
                        <div className="box d-flex flex-column align-items-start justify-content-between text-white">
                            <div className="box-data">
                                <AnimatedCounter from={0} to={Number(t('box.client.data'))}/>%
                            </div>
                            <div className="box-title">{t('box.client.title')}</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;