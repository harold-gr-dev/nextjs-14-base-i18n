import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';

const Component = () => {
  const t = useTranslations('navBar');
  const locale = useLocale();

  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
        <Link
          href='/'
          className='text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6'
        >
          {t('home')}
        </Link>

        <Link
          href={`/${locale}/about`}
          className='border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6'
        >
          {t('about')}
        </Link>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Component;
