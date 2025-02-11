import {Link} from "@/i18n/routing";

const NavbarLogo = () => {
    
    return (
        <Link id="navbar-logo"
            className="text-reset fw-bold text-decoration-none fs-3"
            href={'/'}
            passHref>
                S.
        </Link>
    )
}

export default NavbarLogo;