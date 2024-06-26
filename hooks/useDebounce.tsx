import { useEffect } from 'react';

import useTimeout from '@/hooks/useTimout';

export default function useDebounce(
  callback: () => void,
  delay: number,
  dependencies: string[]
) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
