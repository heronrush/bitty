"use client";

import { invalidUrlAtom, shortUrlAtom, urlAtom } from "@/store/atoms/urlAtom";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import axios from "axios";
import { displayModalAtom } from "@/store/atoms/modalAtom";

export default function GenerateShortLinkButton() {
  const [url, setUrl] = useAtom(urlAtom);
  const invalidUrl = useAtomValue(invalidUrlAtom);
  const setShortUrl = useSetAtom(shortUrlAtom);

  const setModalOff = useSetAtom(displayModalAtom);

  async function handleClick() {
    const response = await axios.post("http://localhost:3002/api/short", {
      url,
    });

    const shortUrl = await response.data.shortURL;

    setShortUrl(shortUrl);
    setUrl("");

    setModalOff(false);
  }

  return (
    <>
      <button
        className={`w-50 mr-6 mt-4 h-10 rounded-md border bg-neutral-800 px-2 py-1.5 align-middle font-semibold text-gray-50 hover:bg-neutral-700 ${invalidUrl ? "cursor-not-allowed" : "cursor-pointer"} `}
        onClick={handleClick}
      >
        Generate short URL
      </button>
    </>
  );
}
