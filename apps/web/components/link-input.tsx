"use client";

import { useRef, useState } from "react";

import LinkShortenButton from "./link-short-button";
import LinkCopyButton from "./link-copy-button";

export default function LinkInput({}) {
  const [link, setLink] = useState("");
  const inputRef = useRef(null);

  function generateLink() {
    const a = Math.random().toString();
    setLink(a);
  }

  async function copyLink() {
    const linkText = inputRef.current ? inputRef.current.value : "";

    try {
      await navigator.clipboard.writeText(linkText);
      alert("link copied to clipboard")!;
    } catch (err) {
      alert("could not copy link");
    }
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

      <div className="flex gap-x-5 mt-10">
        <input
          type="text"
          ref={inputRef}
          className="border border-gray-400 p-3 focus:border-gray-800 w-[500px] inline-block"
        />

        <LinkCopyButton onClick={copyLink} />
      </div>
    </>
  );
}
