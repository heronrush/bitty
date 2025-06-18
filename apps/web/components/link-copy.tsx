"use client";

import { useState } from "react";

import LinkShortenButton from "./link-short-button";

export default function LinkCopy() {
  const [link, setLink] = useState<number | string>("");

  function generateLink() {
    const a = Math.random();
    setLink(a);
  }

  return (
    <>
      <div className="flex gap-x-5">
        <input
          type="text"
          className="border focus:border-black border-gray-400 p-3 w-[500px] inline-block "
          placeholder="enter your link here"
        />

        <LinkShortenButton onClick={generateLink} />
      </div>

      <input
        type="text"
        value={link}
        className="border border-gray-400 p-3 focus:border-gray-800 w-[500px] inline-block mt-10 mr-30"
      />
    </>
  );
}
