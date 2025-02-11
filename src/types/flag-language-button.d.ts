interface FlagLanguageButtonProps {
    flagUrl: string;
    language: Language;
    altImgText: string;
    selectLanguage: (lang: Language) => void;
}

type Language = 'it' | 'en';