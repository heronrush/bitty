'use client';

import { shortUrlAtom } from '@/store/atoms/urlAtom';
import { useAtomValue } from 'jotai';

export default function ShortURLInput() {
  const shortUrl = useAtomValue(shortUrlAtom);

  return <input type="text" className="w-100 border p-2" value={shortUrl} />;
}
