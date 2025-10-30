import {Link} from "@/i18n/routing";

const NavbarLogo = () => {
    
    return (
        <Link id="navbar-logo"
            className="text-reset text-decoration-none fs-3"
            href={'/'}
            passHref>
                stefano
            <span className="fw-bold">satta</span>
            <small><sup>&copy;</sup></small>
        </Link>
    )
}

export default NavbarLogo;