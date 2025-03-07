import Container from "react-bootstrap/Container";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import {useTranslations} from "next-intl";


const Privacy = () => {
    const t = useTranslations('privacyPage');

    return (
        <Container className="pt-5" style={{paddingBottom: '150px'}}>
            <TitleSection title={t('title')} className="mt-5 text-center"/>
            <p className="mt-5 fs-3">{t('firstP')}</p>
            <p className="mt-4 fs-3" dangerouslySetInnerHTML={{__html: t.raw('secondP')}}/>
            <p className="mt-4 fs-3">{t('thirdP')}</p>
            <p className="mt-4 fs-3 mb-5">{t('fourthP')}</p>
        </Container>
    )
}

export default Privacy;