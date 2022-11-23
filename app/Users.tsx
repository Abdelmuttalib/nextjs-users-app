'use client';
import { ResponseT } from 'app/types';
import User, { UserLoader } from 'app/User';
import { useState } from 'react';
import useSWR from 'swr';

import clsxm from '@/lib/clsxm';

const usersApiUrl = 'https://reqres.in/api/users';

const fetcher = (apiUrl: string) => fetch(apiUrl).then((res) => res.json());

const Users = () => {
  const [showingAllUsers, setShowingAllUsers] = useState<boolean>(false);
  const [page] = useState<number>(1);
  const { data, mutate, error } = useSWR<ResponseT>(usersApiUrl, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
  });

  const isLoading = !data && !error;

  const fetchMoreUsers = async (page: number) => {
    try {
      const response = await fetch(`${usersApiUrl}?page=${page}`);
      const data: ResponseT = await response.json();
      return data;
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const mutateCacheData = (newData: ResponseT) => {
    mutate(newData, {
      revalidate: false,
    });
  };

  const getNextPage = () => {
    if (data) {
      const { total_pages: totalPages } = data;

      if (totalPages && page < totalPages) {
        const nextPage = page + 1;
        return nextPage;
      }
    }

    return page;
  };

  const loadMoreUsers = async () => {
    const nextPage = getNextPage();
    const usersData = await fetchMoreUsers(nextPage);

    if (data && usersData) {
      mutateCacheData({
        ...data,
        data: [...data.data, ...usersData.data],
      });
    }

    setShowingAllUsers(true);
  };

  return (
    <div className='flex flex-col gap-3 py-10'>
      <h1>Users</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
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
