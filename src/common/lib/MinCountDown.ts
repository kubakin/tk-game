export const minCount = (start: Date, end: Date) => {
  if (!start || !end) return 0;
  const min = (end.getTime() - start.getTime()) / (1000 * 60);
  if (min < 0) return 0;
  return min;
};
