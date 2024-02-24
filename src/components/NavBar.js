import { useTranslations } from 'next-intl';

// Components
import LinkActive from '@/components/LinkActive';
import LocaleSwitcher from '@/components/LocaleSwitcher';

const links = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' },
];

const Component = () => {
  const t = useTranslations('navBar');

  return (
    <nav className='bg-white shadow dark:bg-gray-800'>
      <div className='container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300'>
        <ul className='flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0'>
          {links.map((link, index) => (
            <li key={index}>
              <LinkActive
                name={t(link.name)}
                href={link.href}
                className='menu-link'
              />
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Component;
