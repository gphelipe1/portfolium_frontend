export const reduceText = (text = "") => {
  const breakPoint = 200;

  if (text.length <= breakPoint) return text;

  return `${text.slice(0, breakPoint)}...`;
};
