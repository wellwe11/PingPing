export const fetchData = async (link: string) => {
  const res = await fetch(link);

  if (!res.ok) {
    return new Error(`Failed to fetch. Res: ${res});
        }`);
  }

  const data = await res.json();
  return data;
};
