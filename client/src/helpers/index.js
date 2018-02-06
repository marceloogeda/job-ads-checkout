import hexToRgb from 'hex-to-rgb';

export const rgba = (hex, opacity = 1): string => {
  const rgb = hexToRgb(hex);
  return `rgba(${rgb.concat(opacity).join(',')})`;
};
