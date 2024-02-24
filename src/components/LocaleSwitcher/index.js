import { useLocale, useTranslations } from 'next-intl';
import { locales } from '@/i18n/config';
import Select from './Select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <Select defaultValue={locale} label={t('label')}>
      {locales.map((cur) => {
        return (
          <option key={cur} value={cur}>
            {cur.toUpperCase()}
          </option>
        );
      })}
    </Select>
  );
}
