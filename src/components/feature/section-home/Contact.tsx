"use client"
import React from 'react';
import { Col, Container, Row} from "react-bootstrap";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import {useTranslations} from "next-intl";
import {motion} from "motion/react";
import Link from "next/link";
import myInfo from "@/utility/my-info";


const Contact = () => {
    const t = useTranslations('homepage.contacts');

    return (
        <section className="bg-black">
            <Container id="contact-hero" as="div" className="text-white">
                <TitleSection title={t('title')} className="font-archivo-black"/>
                <Row>
                    <Col xs={12} lg={6} className="mb-4">
                        <p className="my-4 fs-2" dangerouslySetInnerHTML={{__html: t.raw('subTitle')}}></p>
                        <p className="fs-2 mt-3" dangerouslySetInnerHTML={{__html: t.raw('message')}}></p>
                        <p className="fs-5 mt-5" dangerouslySetInnerHTML={{__html: t.raw('location')}}></p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="d-flex flex-column justify-content-start h-100">
                            <motion.div className="font-archivo-black rounded-pill py-2 px-3 fs-3"
                                        style={{width: 'max-content', border: '1px solid white'}}
                                        initial={{ y: -100, rotate: 0, x: 45, opacity: 0 }}
                                        whileInView={{y: 135, rotate: -60, x: 45, opacity: 1 }}
                                        transition={{ type: "spring", bounce: 0.65 }}
                                        viewport={{ once: true }}
                                        whileHover={{ backgroundColor: '#FF3B32', border: '1px solid #FF3B32' }}>
                                <Link href={myInfo.linkedin} className="text-decoration-none text-white">
                                    LinkedIn
                                </Link>
                            </motion.div>
                            <motion.div className="font-archivo-black rounded-pill py-2 px-3 fs-3"
                                        style={{width: 'max-content', border: '1px solid white'}}
                                        initial={{ y: -100, rotate: 0, x: 207, opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0.65 }}
                                        viewport={{ once: true }}
                                        whileInView={{  y: 95, rotate: 35, x: 220, opacity: 1}}
                                        whileHover={{ backgroundColor: 'white', color: 'black' }}>
                                <Link href={myInfo.notionCV} className="text-reset text-decoration-none text-white">
                                    Notion CV
                                </Link>
                            </motion.div>
                            <motion.div className="font-archivo-black rounded-pill py-2 px-3 fs-3"
                                        style={{width: 'max-content', border: '1px solid white'}}
                                        initial={{ y: -100, rotate: 0, x: 140, opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0.65 }}
                                        viewport={{ once: true }}
                                        whileInView={{ rotate: -6, y: 70, x: 140, opacity: 1 }}
                                        whileHover={{ backgroundColor: 'orange', border: '1px solid orange'}}>
                                <Link href={myInfo.github} className="text-decoration-none text-white">
                                    GitHub
                                </Link>
                            </motion.div>
                            <motion.div className="font-archivo-black rounded-pill py-2 px-3 fs-3"
                                        style={{width: 'max-content', border: '1px solid white'}}
                                        initial={{ y: -100, rotate: 0, opacity: 0 }}
                                        transition={{ type: "spring", bounce: 0.65 }}
                                        viewport={{ once: true }}
                                        whileInView={{ y: 80, rotate: 6, opacity: 1 }}
                                        whileHover={{ backgroundColor: 'blue', border: '1px solid blue'}}>
                                <Link href={`mailto:${myInfo.email}`} className="text-decoration-none text-white">
                                    {myInfo.email}
                                </Link>
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;