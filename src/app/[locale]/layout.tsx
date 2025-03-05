import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import React from "react";
import NavBar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import {routing} from "@/i18n/routing";
/*import { Lato } from 'next/font/google';*/
/*import ButtonScrollTop from "@/components/common/button-scroll-to-top/ButtonScrollTop";
import useScrollToTop from "@/hooks/useScrollToTop";*/

/*const lato = Lato({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    display: 'swap'
})*/


export default async function LocaleLayout({children, params}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>
}) {

    //const {isScrollToTop} = useScrollToTop();
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as never)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        /*<html lang={locale}>*/
            /*<body className={lato.className}>*/
                <NextIntlClientProvider messages={messages}>
                    <NavBar/>
                        <main className="position-relative" style={{marginTop: '80px'}}>
                            {children}
                            {/*{isScrollToTop && <ButtonScrollTop/>}*/}
                        </main>
                    <Footer/>
                </NextIntlClientProvider>
            /*</body>*/
        /*</html>*/
    );
}