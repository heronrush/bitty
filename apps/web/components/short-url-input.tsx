"use client";

import { shortUrlAtom } from "@/store/atoms/urlAtom";
import { useAtomValue } from "jotai";

export default function ShortURLInput() {
  const shortUrl = useAtomValue(shortUrlAtom);

  return <input type="text" className="border p-2 w-100" value={shortUrl} />;
}
