'use client';
import useUsers from 'app/use-users';
import User, { UserLoader } from 'app/User';

import clsxm from '@/lib/clsxm';

const Users = () => {
  const { data, isLoading, loadMoreUsers, showingAllUsers } = useUsers();

  return (
    <div className='flex flex-col gap-3 py-10'>
      <h1>Users</h1>
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        {/* loading */}
        {isLoading && [1, 2, 3, 4, 5, 6].map((i) => <UserLoader key={i} />)}
        {/* data */}
        {data?.data?.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
      <button
        type='button'
        onClick={() => loadMoreUsers()}
        disabled={showingAllUsers}
        className={clsxm(
          'w-fit rounded bg-primary-600 py-2 px-5 font-bold text-white hover:bg-primary-700 disabled:bg-gray-300',
          {
            'cursor-not-allowed bg-gray-600 text-gray-400': showingAllUsers,
          }
        )}
      >
        Load More
      </button>
    </div>
  );
};

export default Users;
