import {defineRouting} from 'next-intl/routing';
import {createNavigation} from "next-intl/navigation";

export const DEFAULT_LOCALE: Language = 'it';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['it', 'en'],

    // Used when no locale matches
    defaultLocale: DEFAULT_LOCALE,
    localePrefix: "always",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, usePathname, useRouter} = createNavigation(routing);
