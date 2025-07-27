"use client"

import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Icon from "@/components/common/icons/Icon";
import { useEffect, useState } from "react";
import OffCanvasMenu from "./OffCanvansMenu";
import NavbarLogo from "./NavbarLogo";
import myInfo from "@/utility/my-info";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";
import LocaleSwitcher from "@/components/common/navbar/locale-switcher/LocaleSwitcher";


const SCROLLED_CLASS_STYLE_NAVBAR: string = 'navbar-scrolled bg-black text-white rounded-pill';


const NavBar = () => {
    const [nbScrolledClass, setNbScrolledClass] = useState<string>('');
    const [isShowMenu, setShowMenu] = useState<boolean>(false);
    const handleCloseMenu = () => setShowMenu(false);
    const handleShowMenu = () => setShowMenu(true);
    const t = useTranslations('navbar');


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setNbScrolledClass(SCROLLED_CLASS_STYLE_NAVBAR);
            } else if (window.scrollY < 50) {
                setNbScrolledClass('');
            }
        });

    }, [])

    return (
        <Navbar expand="lg" fixed="top" className="py-3 mx-auto" style={{maxWidth: '900px'}}>
            <Container className={nbScrolledClass}>
                <NavbarLogo/>
                <button type="button"
                        title="button-mobile-menu"
                        style={{background: 'none', border: 'none'}}
                        className={`d-sm-block d-lg-none ${nbScrolledClass ? 'text-white': 'text-black'}`}
                        onClick={handleShowMenu}>
                    <Icon icon={'fa-solid fa-bars'} className="fs-2 cursor-pointer"/>
                </button>
                <OffCanvasMenu isShow={isShowMenu}
                               closeMenu={handleCloseMenu}
                               className="d-sm-block d-lg-none bg-black text-white w-100"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="fs-5 d-none d-lg-inline-flex centered-absolute">
                        <Nav.Item className="me-5">
                            <Link className={`link text-lowercase ${nbScrolledClass ? 'text-white' : 'text-black'}`}
                                  href={'/'}
                                  passHref>
                                {t('homepage')}
                            </Link>
                        </Nav.Item>
                        <Nav.Item className="me-5">
                            <Link className={`link text-lowercase ${nbScrolledClass ? 'text-white' : 'text-black'}`}
                                  href={'/about'}
                                  passHref>
                                {t('about')}
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className={`link text-lowercase ${nbScrolledClass ? 'text-white' : 'text-black'}`}
                                  href={'/#contact-hero'}
                                  passHref>
                                {t('contact')}
                            </Link>
                        </Nav.Item>
                    </Nav>

                    <div className="d-none d-lg-inline-flex ms-auto">
                        <LocaleSwitcher/>
                        <Link href={`mailto:${myInfo.email}?subject=Project info`}
                              passHref
                              id="hire-me-button"
                              className="btn btn-yellow-accent rounded-pill ms-4">
                            {t('hireMe')}
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;