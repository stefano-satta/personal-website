"use client"

import { useEffect, useState } from "react";

const MailClipboard = () => {
    const [showClipboard, setClipboard] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setClipboard(false)
        }, 3000);
    }, [showClipboard])

    const handleCopyMail = () => {
        setClipboard(!showClipboard);
        navigator.clipboard.writeText('stefanosatta@outlook.com')
    }

    return (
        <div className="position-relative py-5 px-3 mt-5" id="contact-mail">
            {
                showClipboard &&
                    <span className="bg-less-dark py-2 px-3 position-absolute bg-black text-white rounded-3 comics"
                            style={{bottom: '110px', left: '50px'}}>
                        Mail copied! 📋
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