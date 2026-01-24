import {Col, Container, Row} from "react-bootstrap";
import TitleSection from "@/components/common/title-subtitle-sections/TitleSection";
import CustomTooltip from "@/components/common/custom-tooltip/CustomTooltip";
import AppIcon from "@/components/common/app-icon/AppIcon";
import AngularLogo from "../../../../public/logos/angular.png";
import RxJSLogo from "../../../../public/logos/rxjs.png";
import ReactLogo from "../../../../public/logos/react.png";
import ReduxLogo from "../../../../public/logos/redux.png";
import NextLogo from "../../../../public/logos/next.svg";
import VueLogo from '../../../../public/logos/vuejs.png';
import JavascriptLogo from "../../../../public/logos/javascript.png";
import TypescriptLogo from "../../../../public/logos/typescript.png";
import ViteLogo from "../../../../public/logos/vite.png";
import Icon from "@/components/common/icons/Icon";
import {useTranslations} from "next-intl";
import CircularHello from "@/components/common/circular-hello/CircularHello";


const MySelfTechSection = () => {
    const t = useTranslations('aboutPage');

    return (
        <section id="my-self-tech-section" className="bg-black text-white">
            <Container className="py-5">
                <div className="mt-5 w-100 d-flex justify-content-center">
                    <div className="w-75 d-flex justify-content-center flex-column flex-md-row">
                        <div>
                            <CircularHello/>
                        </div>
                        <div className="ps-0 ps-md-5 mt-3 mt-md-0">
                            <TitleSection title={t('title')}
                                          className="fs-title-section font-archivo-black"/>
                        </div>
                    </div>
                </div>
                <Row className="mt-5 pt-0 pt-lg-5 mb-5">
                    <Col xs={{span: 12, order: 2}} lg={{span: 4, order: "first"}} className="mb-5 mb-lg-0">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            rowGap: '10px',
                            justifyItems: 'center',
                            alignItems: 'center'
                        }}>
                            <div className="">
                                <CustomTooltip text="Angular">
                                    <AppIcon url={AngularLogo} altLabel={'angular_logo'} width={50}/>
                                </CustomTooltip>
                            </div>
                            <div className="">
                                <CustomTooltip text="React">
                                    <AppIcon url={ReactLogo} altLabel={'react_logo'} width={50}/>
                                </CustomTooltip>
                            </div>
                            <div className="">
                                <CustomTooltip text="VueJS">
                                    <AppIcon url={VueLogo} altLabel={'vue_logo'} width={50}/>
                                </CustomTooltip>
                            </div>
                            <div className="">
                                <CustomTooltip text="RxJS">
                                    <AppIcon url={RxJSLogo} altLabel={'rxjs_logo'} width={50}/>
                                </CustomTooltip>
                            </div>
                            <div className="">
                                <CustomTooltip text="NextJS">
                                    <AppIcon url={NextLogo} altLabel={'next_logo'} width={60} className="bg-white"/>
                                </CustomTooltip>
                            </div>
                            <div className="">
                                <CustomTooltip text="Redux">
                                    <AppIcon url={ReduxLogo} altLabel={'redux_logo'} width={50}/>
                                </CustomTooltip>
                            </div>
                            <div className="">
                                <CustomTooltip text="JavaScript">
                                    <AppIcon url={JavascriptLogo} altLabel={'js_logo'} width={64}/>
                                </CustomTooltip>
                            </div>
                            <div className="">
                                <CustomTooltip text="TypeScript">
                                    <AppIcon url={TypescriptLogo} altLabel={'ts_logo'}/>
                                </CustomTooltip>
                            </div>
                            <div className="">
                                <CustomTooltip text="Webpack">
                                    <AppIcon url={ViteLogo} altLabel={'vite_logo'}/>
                                </CustomTooltip>
                            </div>
                        </div>
                    </Col>
                    <Col xs={{span: 12, order: 1}} lg={{span: 7, offset: 1, order: "last"}} className="text-center">
                        <p className="fs-4 mb-4" dangerouslySetInnerHTML={{__html: t.raw('presentation')}}></p>
                        <p className="fs-4" dangerouslySetInnerHTML={{__html: t.raw('shortMessage')}}/>
                        <p className="fs-4 my-5">{t('shortMessageExperience')}</p>

                    </Col>
                </Row>
                <div className="d-flex mt-5 pt-5 mb-5 align-items-center justify-content-center">
                    <div className="rounded-circle bg-white d-flex justify-content-center align-items-center flex-shrink-0"
                         style={{width: '60px', height: '60px'}}>
                        <Icon icon={'fa-solid fa-arrow-down fa-xl fa-bounce'} className="text-black"/>
                    </div>
                    <p className="fs-4 ms-3 mb-0">{t('checkBelowServices')}</p>
                </div>
            </Container>
        </section>
    )
}

export default MySelfTechSection;