import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import React from "react";
import NavBar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";
import {routing} from "@/i18n/routing";
import ButtonScrollTop from "@/components/common/button-scroll-to-top/ButtonScrollTop";

export const runtime = 'nodejs';

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
        <NextIntlClientProvider messages={messages}>
            <NavBar/>
                <main className="position-relative" style={{marginTop: '80px'}}>
                    {children}
                    <ButtonScrollTop/>
                </main>
            <Footer/>
        </NextIntlClientProvider>
    );
}