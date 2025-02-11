"use client"

import {useRouter} from "@/i18n/routing";
import {ChangeEvent, useTransition} from "react";
import { Form } from "react-bootstrap";
import {useLocale} from "next-intl";
import FlagLanguageButton from "@/components/common/navbar/locale-switcher/FlagLanguageButton";
import flagLanguagesUrl from "@/utility/language";


const LocaleSwitcher = () => {
    const router = useRouter();
    const currentLocale = useLocale();
    const [, startTransition] = useTransition();

    const handleSelectLanguage = (langSelected: Language) => {
        const locale = langSelected;

        startTransition(() => {
            router.replace(locale);
        })
    }

    return (
        <div className="w-25">
            { currentLocale === 'en' ?
                <FlagLanguageButton language={'it'} flagUrl={flagLanguagesUrl.it} altImgText={'italian flag'} selectLanguage={handleSelectLanguage}/> :
                <FlagLanguageButton language={'en'} flagUrl={flagLanguagesUrl.eng} altImgText={'english flag'} selectLanguage={handleSelectLanguage}/>
            }
        </div>

    )
}

export default LocaleSwitcher;