import {Link} from "@/i18n/routing";

const NavbarLogo = () => {
    
    return (
        <Link id="navbar-logo"
            className="text-reset text-decoration-none text-white border border-white rounded-circle text-center"
            href={'/'}
            passHref>
                S
        </Link>
    )
}

export default NavbarLogo;