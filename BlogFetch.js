import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export const UseFetchBlog = () => {
  const { data, error, isLoading } = useSWR('/api/blogs/blog', fetcher);

  useEffect(() => {
    console.log("Fetched Data:", data);
  }, [data]);

  return { data, error, isLoading };
};
