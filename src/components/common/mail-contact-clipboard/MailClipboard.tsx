"use client"

import { useEffect, useState } from "react";
import {useTranslations} from "next-intl";
import myInfo from "@/utility/my-info";

const MailClipboard = () => {
    const [showClipboard, setClipboard] = useState(false);
    const t = useTranslations('actions');

    useEffect(() => {
        setTimeout(() => {
            setClipboard(false)
        }, 3000);
    }, [showClipboard])

    const handleCopyMail = () => {
        setClipboard(!showClipboard);
        navigator.clipboard.writeText(myInfo.email);
    }

    return (
        <div className="position-relative py-5 px-3 mt-5" id="contact-mail">
            {
                showClipboard &&
                    <span className="bg-less-dark py-2 px-3 position-absolute bg-black text-white rounded-3 comics"
                            style={{bottom: '110px', left: '50px'}}>
                        {t('mailCopied')}
                    </span>
            }
            <div className="cursor-pointer text-decoration-none link fs-contact-mail"
                    onClick={handleCopyMail}>
                stefanosatta@outlook.com
            </div>
        </div>
    )
}

export default MailClipboard;