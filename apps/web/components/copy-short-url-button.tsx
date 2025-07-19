'use client';

import { shortUrlAtom } from '@/store/atoms/urlAtom';
import { useAtomValue } from 'jotai';

async function copyTextToClipboard(textToCopy: string) {
  try {
    await navigator.clipboard.writeText(textToCopy);
    alert('Short url copied to clipboard successfully!');
  } catch (err: unknown) {
    console.log(err);
    alert('Failed to copy url, do it manually');
  }
}

export default function CopyShortURLButton() {
  const shortUrl = useAtomValue(shortUrlAtom);

  return (
    <button
      className="ml-5 w-20 rounded-md border bg-gray-700 p-2 font-semibold text-white hover:cursor-pointer hover:bg-gray-600"
      onClick={() => copyTextToClipboard(shortUrl)}
    >
      Copy
    </button>
  );
}
