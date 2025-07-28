"use client"

import TitleFirstHero from "@/components/common/title-subtitle-sections/TitleFirstHero";
import SocialContacts from "@/components/common/navbar/SocialContacts";
import myInfo from "@/utility/my-info";
import { Container } from "react-bootstrap";
import { Link } from "@/i18n/routing";
import {useTranslations} from "next-intl";
import CookieButton from "@/components/common/cookie-button/CookieButton";
import useScrollToTop from "@/hooks/useScrollToTop";


const FirstHero = () => {
    const t = useTranslations('homepage');
    const tActions = useTranslations('actions');
    const {isScrollToTop} = useScrollToTop();

    return (
        <Container as="section" id="first-hello-hero" className="text-center position-relative">
            <TitleFirstHero/>
            <p className="fs-3 text-wrap-balance" dangerouslySetInnerHTML={{__html: t.raw('welcomeMessage')}}/>
            <SocialContacts className="mt-4 d-none d-lg-flex" socialColorLink="social-link-black"/>
            <Link href={`mailto:${myInfo.email}?subject=Project info.`}
                passHref
                className="btn btn-yellow-accent d-lg-none mt-4 rounded-pill">
                {tActions('hireMe')}
            </Link>
            {!isScrollToTop && <CookieButton/>}
        </Container>
    )
}

export default FirstHero;