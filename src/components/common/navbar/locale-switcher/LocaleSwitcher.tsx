"use client"

import {usePathname, useRouter} from "@/i18n/routing";
import {BaseHTMLAttributes, useTransition} from "react";
import {useLocale} from "next-intl";
import FlagLanguageButton from "@/components/common/navbar/locale-switcher/FlagLanguageButton";
import flagLanguagesUrl from "@/utility/language";

type LocaleSwitcherProps = BaseHTMLAttributes<HTMLDivElement>


const LocaleSwitcher = (props: LocaleSwitcherProps) => {
    const {className} = props;
    const router = useRouter();
    const currentLocale = useLocale();
    const pathname = usePathname();
    const [, startTransition] = useTransition();

    const handleSelectLanguage = (langSelected: Language) => {
        const locale = langSelected;

        startTransition(() => {
            router.replace({pathname: `${pathname}${window.location.hash}`},{locale});
        })
    }

    return (
        <div className={`${className} w-25`}>
            { currentLocale === 'en' ?
                <FlagLanguageButton language={'it'} flagUrl={flagLanguagesUrl.it} altImgText={'italian flag'} selectLanguage={handleSelectLanguage}/> :
                <FlagLanguageButton language={'en'} flagUrl={flagLanguagesUrl.eng} altImgText={'english flag'} selectLanguage={handleSelectLanguage}/>
            }
        </div>
    )
}

export default LocaleSwitcher;