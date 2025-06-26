import {useTranslations} from 'next-intl';

export default function NotFoundPage() {
    const t = useTranslations('notFoundPage');
    return <div>{t('title')}</div>;
}