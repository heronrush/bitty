"use client";

import { shortUrlAtom, urlAtom } from "@/store/atoms/urlAtom";
import { useAtomValue, useSetAtom } from "jotai";
import axios from "axios";

export default function ShrinkButton() {
  const url = useAtomValue(urlAtom);
  const setShortUrl = useSetAtom(shortUrlAtom);

  async function handleClick() {
    const response = await axios.post("http://localhost:3002/api/short", {
      url,
    });

    const shortUrl = await response.data.shortURL;

    setShortUrl(shortUrl);
  }

  return (
    <>
      <button
        className="border bg-gray-700 hover:bg-gray-600 text-white font-semibold p-2 ml-5 hover:cursor-pointer w-20 rounded-md"
        onClick={handleClick}
      >
        Shrink
      </button>
    </>
  );
}
