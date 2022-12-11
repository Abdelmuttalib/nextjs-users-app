import { UserT } from 'app/types';
import Image from 'next/image';
import { FC, ReactElement } from 'react';

import { SkeletonLoader } from '@/components/loaders';

const User: FC<UserT> = ({
  avatar,
  first_name,
  last_name,
  email,
}: UserT): ReactElement => {
  return (
    <div className='relative my-2 grid auto-cols-max grid-flow-col items-center gap-3 rounded-lg border-2 border-gray-700 bg-white px-3 py-1.5 shadow-lg md:py-2.5 md:px-5'>
      <Image
        src={avatar}
        alt={`${first_name} avatar`}
        width={80}
        height={80}
        className='rounded-full'
      />
      <div>
        <p className='text-sm font-medium md:text-base'>
          {first_name} {last_name}
        </p>
        <span className='inline-block w-full overflow-hidden text-ellipsis text-xs text-gray-500 md:text-sm'>
          {email}
        </span>
      </div>
    </div>
  );
};

export default User;

export const UserLoader: FC = (): ReactElement => (
  <div className='relative my-2 grid auto-cols-max grid-flow-col items-center gap-3 rounded-lg border-2 border-gray-700 bg-white px-3 py-1.5 shadow-lg md:py-2.5 md:px-5'>
    <SkeletonLoader className='h-20 w-20 rounded-full' />
    <div className='flex flex-col gap-1'>
      <div className='font-medium'>
        <SkeletonLoader className='h-5 w-24' />
      </div>
      <div className='text-sm text-gray-400'>
        <SkeletonLoader className='h-4 w-32' />
      </div>
    </div>
  </div>
);
