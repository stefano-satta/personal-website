import {Link} from "@/i18n/routing";

const NavbarLogo = () => {
    
    return (
        <Link id="navbar-logo"
            className="text-reset fw-bold text-decoration-none fs-3"
            href={'/'}
            passHref>
                S.
            
            {/* <div>
                <span className="first fw-bold">s</span>
                <span className="dot">.</span>
                <span className="">a</span>
                <span className="">t</span>
                <span className="">t</span>
                <span className="">a</span>
                <span>.</span>
                <span className="fw-bold">s</span>
                <span>t</span>
                <span>e</span>
                <span>f</span>
                <span>a</span>
                <span>n</span>
                <span>o</span>
            </div> */}
        </Link>
    )
}

export default NavbarLogo;