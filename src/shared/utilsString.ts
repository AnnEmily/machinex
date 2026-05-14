export const assertExhaustive = (_value: never): never => {
  const message = 'expected exhaustive covering of input';
  throw new Error(message);
};

export const insensitiveSort = (a: string, b: string) => {
  return a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true });
};

export const  trimDecimals = (value: number, decimals = 2): string => {
  // Convertit en chaîne et sépare la partie entière de la partie décimale
  const parts = value.toString().split('.');
  
  // S'il n'y a pas de décimale, retourne la partie entière
  if (parts.length === 1) return parts[0];
  
  // Garde au maximum "decimals" chiffres après la virgule (sans arrondir)
  const fractional = parts[1].substring(0, decimals);
  
  // Recompose le nombre et nettoie les zéros ou points traînants
  return `${parts[0]}.${fractional}`.replace(/\.?0+$/, '');
};
