'use client';

import clsx from 'clsx';
import { usePathname, useParams } from 'next/navigation';
import Link from 'next/link';

const Component = ({ name = '', href = '/', className = '' }) => {
  // Get the current pathname
  const pathname = usePathname();
  // Get the current locale
  const { locale = 'es' } = useParams();
  // Remove empty parts and add locale to create the final href
  const parts = href.split('/').filter((part) => part.trim().length > 0);
  let final = `/${locale}`;
  if (parts.length > 0) {
    final += `/${parts.join('/')}`;
  }

  return (
    <Link
      className={clsx(className, pathname === final && 'active')}
      href={final}
    >
      {name}
    </Link>
  );
};

export default Component;
