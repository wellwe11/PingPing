export const pingTarget = async (
  url: string
): Promise<{
  success: boolean;
  status?: number;
  responseTime: number;
  err?: string;
}> => {
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
      err: err instanceof Error ? err.message : String(err),
    };
  }
};
