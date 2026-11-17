import { useEffect, useState } from 'react';

import { fetchData } from '@/api';

const RootDataHook = (link: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      setError(null);

      const res = await fetchData(link);
      if (res instanceof Error) {
        setError(res);
      } else {
        setData(res.data);
      }

      setLoading(false);
    };

    getData();
  }, [link]);

  return { data, error, loading };
};

export default RootDataHook;
