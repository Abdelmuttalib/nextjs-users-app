import { ResponseT } from 'app/types';
import { useState } from 'react';
import useSWR from 'swr';

export const usersApiUrl = 'https://reqres.in/api/users';

const fetcher = (apiUrl: string) => fetch(apiUrl).then((res) => res.json());

const useUsers = () => {
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

  return { data, isLoading, loadMoreUsers, showingAllUsers };
};

export default useUsers;
