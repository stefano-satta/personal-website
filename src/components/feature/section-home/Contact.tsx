import React from 'react';
import { Col, Container, Row} from "react-bootstrap";
import Icon from "@/components/common/icons/Icon";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import MailClipboard from '@/components/common/mail-contact-clipboard/MailClipboard';
import myInfo from '@/utility/my-info';
import icon from "@/utility/icon";
import { Link } from '@/i18n/routing';
import {useTranslations} from "next-intl";


const Contact = () => {
    const t = useTranslations('homepage.contacts');

    return (
        <Container id="contact-hero" as="section">
            <TitleSection title={t('title')}/>
            <Row>
                <Col xs={12} lg={6} className="mb-4">
                    <p className="my-4 fs-2" dangerouslySetInnerHTML={{__html: t.raw('subTitle')}}></p>
                    <p className="fs-2 mt-3" dangerouslySetInnerHTML={{__html: t.raw('message')}}></p>
                    <ul className="mt-5 fs-2 ps-0">
                        <li className="list-unstyled mb-2">
                            <Icon icon={icon.linkedin} className="me-3"></Icon>
                            <Link href={myInfo.linkedin}
                                  passHref
                                  target="_blank"
                                  className="link text-decoration-none text-wrap">
                                LinkedIn profile
                            </Link>
                        </li>
                        <li className="list-unstyled mb-2">
                            <Icon icon={icon.github} className="me-3"></Icon>
                            <Link href={myInfo.github}
                                  passHref
                                  target={'_blank'}
                                  className="link text-decoration-none text-wrap">
                                GitHub profile
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
                    </ul>
                </Col>
                <Col xs={12} lg={6}>
                    <MailClipboard/>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;