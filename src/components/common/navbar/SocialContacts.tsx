import myInfo from "@/utility/my-info";
import { HTMLAttributes } from "react";
import Icon from "../icons/Icon";
import icon from "./../../../utility/icon";
import { Link } from "@/i18n/routing";

interface SocialContactsProps extends HTMLAttributes<HTMLDivElement> {
    socialColorLink: 'social-link-black' | 'social-link-white';
}


const SocialContacts = ({className = '', socialColorLink = 'social-link-black'}: SocialContactsProps) => {
    
    return (
        <div className={`d-flex ${className}`}>
            <Link href={`mailto:${myInfo.email}?subject=Project info.`}
                  aria-label="Mail me to new collaboration!"
                  passHref
                  className={`text-reset fs-5 me-3 ${socialColorLink}`}>
                <Icon icon={icon.mail}/>
            </Link>
            <Link href={myInfo.linkedin}
                  aria-label="LinkedIn"
                  passHref
                  target="_blank"
                  className={`text-reset fs-5 me-3 ${socialColorLink}`}>
                <Icon icon={icon.linkedin}/>
            </Link>
            <Link href={myInfo.github}
                  aria-label="Github"
                  passHref
                  target="_blank"
                  className={`text-reset fs-5 ${socialColorLink}`}>
                <Icon icon={icon.github}/>
            </Link>
        </div>
    )
}

export default SocialContacts;