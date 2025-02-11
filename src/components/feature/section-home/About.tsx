import {Card, Col, Container, Row} from "react-bootstrap";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import AppIcon from "@/components/common/app-icon/AppIcon";
import AngularLogo from '../../../../public/logos/angular.png';
import ReactLogo from '../../../../public/logos/react.png';
import JavascriptLogo from '../../../../public/logos/javascript.png';
import TypescriptLogo from '../../../../public/logos/typescript.png';
import NextLogo from '../../../../public/logos/next.svg';
import Image from "next/image";
import ideaProductImg from '../../../../public/idea-products.jpg';
import CustomTooltip from "@/components/common/custom-tooltip/CustomTooltip";
import Icon from "@/components/common/icons/Icon";
import VueLogo from "../../../../public/logos/vuejs.png";
import { Link } from "@/i18n/routing";
import {useTranslations} from "next-intl";


const About = () => {
    const t = useTranslations('homepage.whatIDo');

    return (
        <Container as="section" id="about-section-hero">
            <TitleSection title={t('title')}/>
            <p className="fs-2 mb-5" dangerouslySetInnerHTML={{__html: t.raw('subTitle')}}></p>
            <Row className="py-3">
                <Col xs="12" md="6">
                    <Card className="h-100 fs-3 fw-semibold idea-project">
                        <div className="fs-2"dangerouslySetInnerHTML={{__html: t.raw('box.ideaProd')}}></div>
                        <Image src={ideaProductImg} width={300} alt={'idea-into-products-illustration'} className="mt-4 mx-auto"/>
                    </Card>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-between gap-3">
                    <Card className="d-flex flex-column">
                        <div className="fs-2 fw-semibold">{t('box.techs')}</div>
                        <div className="d-flex justify-content-center flex-wrap mt-4">
                            <CustomTooltip text="Angular">
                                <AppIcon url={AngularLogo} altLabel={'angular_logo'} width={50}/>
                            </CustomTooltip>
                            <CustomTooltip text="React">
                                <AppIcon url={ReactLogo} altLabel={'react_logo'} width={50}/>
                            </CustomTooltip>
                            <CustomTooltip text="VueJS">
                                <AppIcon url={VueLogo} altLabel={'vue_logo'} width={50}/>
                            </CustomTooltip>
                            <CustomTooltip text="NextJS">
                                <AppIcon url={NextLogo} altLabel={'next_logo'} width={60}/>
                            </CustomTooltip>
                            <CustomTooltip text="JavaScript">
                                <AppIcon url={JavascriptLogo} altLabel={'js_logo'} width={64}/>
                            </CustomTooltip>
                            <CustomTooltip text="TypeScript">
                                <AppIcon url={TypescriptLogo} altLabel={'ts_logo'}/>
                            </CustomTooltip>
                        </div>
                    </Card>
                    <Card>
                        <div className="fs-2 fw-semibold">{t('box.projects')}</div>
                        <div className="fw-ultra-bold position-absolute projects-count text-grey">
                            +15
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs="12" lg={{span: 9, offset: 3}}>
                    <p className="fs-1 mb-0 mt-5 fw-bold text-uppercase">{t('box.moreInfo')}</p>
                    <div className="d-flex align-items-center">
                        <Link href={'/about'} className="link text-black fs-2 d-flex">{t('box.lookHere')}</Link>
                        <div className="rounded-circle bg-black d-flex justify-content-center align-items-center flex-shrink-0 ms-3"
                             style={{width: '60px', height: '60px'}}>
                            <Icon icon={'fa-solid fa-arrow-down fa-lg'} className="text-white"
                                  style={{transform: 'rotate(225deg)'}}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;