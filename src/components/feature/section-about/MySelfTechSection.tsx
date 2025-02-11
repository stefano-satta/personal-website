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
import WebpackLogo from "../../../../public/logos/webpack.png";
import Icon from "@/components/common/icons/Icon";


const MySelfTechSection = () => {

    return (
        <section id="my-self-tech-section">
            <Container className="py-5">
                <Row className="pb-5">
                    <Col xs={12} className="position-relative">
                        <TitleSection title={'Hello! <br/> Let me introduce <br/>my self.'}
                                      className="fs-title-mega mb-5"/>
                        <p className="fs-2 my-self">
                            My name is <span className="fw-bold">Stefano Satta </span>
                            and <br/> I am a
                            <span className="fw-bold"> creative front-end developer</span>
                        </p>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <Col xs={12}>
                        <p className="mt-5 fs-2">I work in the field of software development for over 6 years. I have
                            partecipated in more
                            than 15
                            projects with clients and companies of various sizes, both in the private sector and in
                            public administration</p>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs={12} lg={4} className="mb-5 mb-lg-0">
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
                                    <AppIcon url={NextLogo} altLabel={'next_logo'} width={60}/>
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
                                    <AppIcon url={WebpackLogo} altLabel={'webpack_logo'}/>
                                </CustomTooltip>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={{span: 7, offset: 1}}>
                        <p className="fs-4">These experiences have allowed me to acquire and improve technical skills as
                            well as soft
                            skills.</p>
                        <div className="d-flex mt-5 mb-5 align-items-center">
                            <div className="rounded-circle bg-black d-flex justify-content-center align-items-center flex-shrink-0"
                                 style={{width: '60px', height: '60px'}}>
                                <Icon icon={'fa-solid fa-arrow-down fa-xl fa-bounce'} className="text-white"/>
                            </div>
                            <p className="fs-4 ms-3 mb-0">Let&#39;s see below what we can do together</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MySelfTechSection;