import TitleFirstHero from "@/components/common/title-subtitle-sections/TitleFirstHero";
import SocialContacts from "@/components/common/navbar/SocialContacts";
import myInfo from "@/utility/my-info";
import { Container } from "react-bootstrap";
import { Link } from "@/i18n/routing";
import {useTranslations} from "next-intl";


const FirstHero = () => {
    const t = useTranslations('homepage');
    const tActions = useTranslations('actions');

    return (
        <Container as="section" id="first-hello-hero" className="text-center">
            <TitleFirstHero/>
            <p className="fs-3 mt-5" dangerouslySetInnerHTML={{__html: t.raw('welcomeMessage')}}></p>
            <SocialContacts className="mt-4 d-none d-lg-flex" socialColorLink="social-link-black"/>
            <Link href={`mailto:${myInfo.email}?subject=Project info.`}
                passHref
                className="btn btn-black d-lg-none mt-4 rounded-pill">
                {tActions('hireMe')}
            </Link>
        </Container>
    )
}

export default FirstHero;