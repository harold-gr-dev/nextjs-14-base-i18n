'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LocaleSwitcher({ dict }) {
  const pathName = usePathname();
  const redirectedPathName = (locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div>
      <p>{dict.heading.langSwitcher}:</p>
      <ul>
        {['es', 'en'].map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
