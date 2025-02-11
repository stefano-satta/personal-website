import { HTMLAttributes } from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import NavbarLogo from "./NavbarLogo";
import SocialContacts from "./SocialContacts";
import useCurrentDate from "@/hooks/useCurrentDate";
import myInfo from "@/utility/my-info";
import {useTranslations} from "next-intl";
import { Link } from "@/i18n/routing";

interface OffCanvasMenuProps extends HTMLAttributes<HTMLDivElement> {
    isShow: boolean;
    closeMenu: () => void;
    size?: 'sm' | 'md' | 'lg';
    placement?: 'start' | 'end' | 'top' | 'bottom';
}


const OffCanvasMenu = (props: OffCanvasMenuProps) => {
    const {isShow, closeMenu, size = '', placement = 'end', className} = props;
    const {getCurrentYear} = useCurrentDate();
    const t = useTranslations('navbar');

    return (
        <Offcanvas show={isShow} onHide={closeMenu} responsive={size} placement={placement} className={className}>
            <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title>
                    <NavbarLogo/>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="h-75">
                <Nav className="justify-content-center align-items-center h-100 mx-auto fs-5">
                    <Nav.Item className="">
                        <Link className={`link fw-semibold text-uppercase`}
                              href={'/'}
                              passHref
                              onClick={closeMenu}>
                            {t('homepage')}
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="">
                        <Link className={`link fw-semibold text-uppercase`}
                              href={'/about'}
                              passHref
                              onClick={closeMenu}>
                            {t('about')}
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link className={`link fw-semibold text-uppercase`}
                              href={'/#contact-hero'}
                              passHref
                              onClick={closeMenu}>
                            {t('contact')}
                        </Link>
                    </Nav.Item>
                </Nav>
            </Offcanvas.Body>
            <SocialContacts className="justify-content-center" socialColorLink="social-link-white"/>
            <p className="m-0 mt-3 text-center">Latest update {myInfo.latestUpdate}</p>
            <p className="m-0 text-center">&copy; {getCurrentYear()} Stefano Satta</p>
        </Offcanvas>
    )
}

export default OffCanvasMenu;