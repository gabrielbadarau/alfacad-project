import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function findDifferentProperties<Type extends object>(
  obj1: Type,
  obj2: Type
) {
  const differentProperties: Partial<Type> = {};

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        differentProperties[key] = obj2[key];
      }
    }
  }

  return differentProperties;
}
