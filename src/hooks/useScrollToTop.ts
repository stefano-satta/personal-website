"use client"

import { useEffect, useState } from "react";


const useScrollToTop = () => {
    const [isScrollToTop, setScrollToTop] = useState(false);

    const handleIsScrolled = () => {
        const position = window.pageYOffset;

        if (position > 300) {
            setScrollToTop(true);
        } else if (position < 300) {
            setScrollToTop(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }

    useEffect(() => {
        window.addEventListener('scroll', handleIsScrolled, {passive: true});

        return () => {
            window.removeEventListener('scroll', handleIsScrolled);
        };
    }, []);

    return {isScrollToTop, scrollToTop};
}

export default useScrollToTop;