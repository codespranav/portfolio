import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useFetchBlog = () => {
  const { data, error, isLoading } = useSWR('/api/apidata', fetcher);
  return { data, error, isLoading };
};
