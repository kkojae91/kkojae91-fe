export const parseQueryString = (search: string): Record<string, string> =>
  (search || '')
    .replace(/^\?/g, '')
    .split('&')
    .reduce((acc, query) => {
      const [key, value] = query.split('=');

      if (key) {
        acc[key] = decodeURIComponent(value);
      }

      return acc;
    }, {} as Record<string, string>);

export const floorBy5Unit = (num: number) =>
  num % 5 === 0 ? Math.floor((num - 1) / 5) * 5 : Math.floor(num / 5) * 5;

export const ceilBy5Unit = (num: number) => Math.ceil(num / 5) * 5;
