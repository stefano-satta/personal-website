import useCurrentDate from "@/hooks/useCurrentDate";
import SocialContacts from "../navbar/SocialContacts";
import Image from 'next/image';
import FullnameImg from '../../../../public/fullname_me.png'


const Footer = () => {
    const {getCurrentYear} = useCurrentDate();

    return (
        <footer className="footer bg-black text-white text-center" style={{maxHeight: 'max-content'}}>
            {/*<SocialContacts className="justify-content-center" socialColorLink="social-link-white"/>*/}
            <div className="w-100 h-100 bg-black text-center  overflow-hidden">
                <div className="font-archivo-black"
                     style={{fontSize: 'clamp(2rem, 9vw, 18vw)', whiteSpace: 'nowrap'}}>
                    STEFANOSATTA
                </div>
            </div>
            <p className="m-0 pb-2">&copy;{getCurrentYear()} - All Rights Reserved</p>
        </footer>
    )
}

export default Footer;