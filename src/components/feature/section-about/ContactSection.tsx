import Blob from "@/components/common/blob/Blob";
import Icon from "@/components/common/icons/Icon";
import Pill from "@/components/common/pills/Pill";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import myInfo from "@/utility/my-info";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import icon from "@/utility/icon";
import {useTranslations} from "next-intl";


const ContactSection = () => {
    const t = useTranslations('aboutPage.contacts');

    return (
        <section className="mt-5 pb-5 container">
            <TitleSection title={t('title')} className="mb-4"/>

            <Link href={`mailto:${myInfo.email}?subject=Project info: New collaboration`}
                passHref
                className="me-3">
                <Pill bgColor="light" textColor="dark" label={t('pills.newCollab')} className="fs-4"/>
            </Link>
            <Link href={`mailto:${myInfo.email}?subject=No coding, only pizza and beer!`}
                passHref>
                <Pill bgColor="light" textColor="dark" label={t('pills.pizza')} className="fs-4"/>
            </Link>

            <Row className="pb-5">
                <Col xs={12} md={6} className="d-flex flex-column ">
                    <p className="fw-medium my-4 fs-2" dangerouslySetInnerHTML={{__html: t.raw('messageInfo')}}></p>
                    <ul className="mt-3 fs-2 ps-0">
                        <li className="list-unstyled mb-2">
                            <Icon icon={icon.linkedin} className="me-3"/>
                            <Link href={myInfo.linkedin}
                                  passHref
                                  target="_blank"
                                  className="link text-decoration-none text-wrap">
                                LinkedIn
                            </Link>
                        </li>
                        <li className="list-unstyled mb-2">
                            <Icon icon={icon.github} className="me-3"></Icon>
                            <Link href={myInfo.github}
                                  passHref
                                  target={'_blank'}
                                  className="link text-decoration-none text-wrap">
                                GitHub
                            </Link>
                        </li>
                        <li className="list-unstyled mb-2">
                            <Icon icon={icon.cv} className="me-3"></Icon>
                            <Link href={myInfo.notionCV}
                                  passHref
                                  target={'_blank'}
                                  className="link text-decoration-none text-wrap">
                                Notion CV
                            </Link>
                        </li>
                        <li className="list-unstyled mb-2">
                            <Icon icon={icon.location} className="me-3"></Icon>
                            <Link href={myInfo.sardiniaCoords}
                                  passHref
                                  target={'_blank'}
                                  className="link text-decoration-none text-wrap">
                                Sardinia, IT
                            </Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} md={6} className="position-relative">
                    <Link href={`mailto:${myInfo.email}?subject=Project info.`} 
                        passHref 
                        className="text-reset position-absolute top-50 start-50 translate-middle"
                        style={{fontSize: '5rem'}}>
                        <Icon icon={icon.mail}/>
                    </Link>
                    <Blob style={{height: '350px'}}/>
                </Col>
            </Row>
        </section>
    )
}

export default ContactSection;