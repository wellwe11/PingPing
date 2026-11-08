export const pingTarget = async (
  url: string
): Promise<{ success: boolean; status?: number; responseTime: number }> => {
  const start = performance.now();

  try {
    // Fetch only head for lighter & faster fetches
    const res = await fetch(url, { method: 'HEAD' });
    const responseTime = Math.round(performance.now() - start);

    return {
      success: res.ok,
      status: res.status,
      responseTime,
    };
  } catch (err) {
    const responseTime = Math.round(performance.now() - start);

    return {
      success: false,
      responseTime,
    };
  }
};
