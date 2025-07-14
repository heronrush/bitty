"use client";

import { shortUrlAtom } from "@/store/atoms/urlAtom";
import { useAtomValue } from "jotai";

async function copyTextToClipboard(textToCopy: string) {
  try {
    await navigator.clipboard.writeText(textToCopy);
    alert("Short url copied to clipboard successfully!");
  } catch (err: unknown) {
    console.log(err);
    alert("Failed to copy url, do it manually");
  }
}

export default function CopyShortURLButton() {
  const shortUrl = useAtomValue(shortUrlAtom);

  return (
    <button
      className="border bg-gray-700 hover:bg-gray-600 text-white font-semibold p-2 ml-5 hover:cursor-pointer w-20 rounded-md"
      onClick={() => copyTextToClipboard(shortUrl)}
    >
      Copy
    </button>
  );
}
