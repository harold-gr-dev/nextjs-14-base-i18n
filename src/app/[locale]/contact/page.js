import { useTranslations } from 'next-intl';

export default function Page({ params: { locale } }) {
  const t = useTranslations('contact');
  return (
    <>
      <h1>{`${t('title')} (${locale})`}</h1>
      <p>{t('description')}</p>
    </>
  );
}
