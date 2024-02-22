import Agenda from '@/components/Agenda';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Agenda />
      <Link href='/' className='btn btn-xs'>
        Go to Home
      </Link>
    </div>
  );
}
