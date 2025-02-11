import {defineRouting} from 'next-intl/routing';
import {createNavigation} from "next-intl/navigation";
import Language from "@/utility/language";

export const DEFAULT_LOCALE: Language = 'en';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['en', 'it'],

    // Used when no locale matches
    defaultLocale: DEFAULT_LOCALE,
    localePrefix: "always",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(routing);
