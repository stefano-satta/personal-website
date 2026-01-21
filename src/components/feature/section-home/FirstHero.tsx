"use client"

import TitleFirstHero from "@/components/common/title-subtitle-sections/TitleFirstHero";
import { Container } from "react-bootstrap";
import {useTranslations} from "next-intl";
import LottieAnimationBlob from "@/components/common/lottie-animation/LottieAnimationBlob";
import Image from "next/image";
import MeMemojiImg from '../../../../public/me.webp'


const FirstHero = () => {
    const t = useTranslations('homepage');
    const tActions = useTranslations('actions');

    return (
        <section id="first-hello-hero" className="bg-black vh-100">
            <Container as="div"  className="text-center position-relative h-100 text-white">
                <TitleFirstHero className="position-relative z-2"/>
                <LottieAnimationBlob className="position-absolute start-50 translate-middle z-0"/>
                {/*{!isScrollToTop && <CookieButton/>}*/}
                <Image src={MeMemojiImg}
                       alt="a portrait of me"
                       className="position-absolute bottom-0 start-50 translate-middle-x z-2"
                       width="480"
                       loading="eager"/>
            </Container>
        </section>

    )
}

export default FirstHero;