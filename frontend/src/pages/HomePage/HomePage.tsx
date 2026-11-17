import { RootDataHook } from '@/hooks';

const HomePage = () => {
  const { data, error, loading } = RootDataHook('/api');

  console.log(data);
  if (error) {
    return <h1>Error</h1>;
  }

  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      {Object.entries(data ?? {}).map(([city, { error, responseTime }]) => (
        <div key={city}>
          <h2>{city}</h2>
          <h3>{error ?? responseTime}</h3>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
