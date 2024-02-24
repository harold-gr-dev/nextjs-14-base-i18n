'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';
import { useRouter, usePathname } from '@/components/navigation';

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <div className='my-2 flex justify-end'>
      <div
        className={clsx(
          'relative bg-white text-black max-w-[200px] rounded-md flex items-center',
          isPending && 'transition-opacity [&:disabled]:opacity-30'
        )}
      >
        <label className='text-black text-xs min-w-[80px] p-3'>{label}</label>
        <select
          className='p-3 w-full min-w-24 border-gray-300 rounded-md border-2 mx-2'
          defaultValue={defaultValue}
          disabled={isPending}
          onChange={onSelectChange}
        >
          {children}
        </select>
      </div>
    </div>
  );
}
