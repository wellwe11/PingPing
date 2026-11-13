export const pingTarget = async (
  url: string,
  abortTimeout?: number
): Promise<{
  success: boolean;
  responseTime: number;

  status?: number;
  error?: string;
}> => {
  const start = performance.now();

  try {
    // Fetch only head
    const res = await fetch(url, {
      method: 'HEAD',
      signal: AbortSignal.timeout(abortTimeout || 1000),
    });
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
      error: err instanceof Error ? err.message : String(err),
    };
  }
};
