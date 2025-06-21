"use client";

import { useRef, useState } from "react";

import LinkShortenButton from "./link-short-button";
import LinkCopyButton from "./link-copy-button";
import axios from "axios";

// asks the user for a link to paste and shrinks it
export default function LinkInput({}) {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const inputRef = useRef(null);

  // sends a api request to get the generated link
  async function generateLink() {
    const sendUrl = await axios.post("http://localhost:3002/api/short", {
      url,
    });

    const responseURL: string = await sendUrl.data.shortURL;
    setShortUrl(responseURL);
  }

  // copies the link to the clipboard
  async function copyLink() {
    const linkText = inputRef.current ? inputRef.current.value : "";

    try {
      const a = await navigator.clipboard.writeText(linkText);
      console.log(a);
      setLinkCopied(true);

      setTimeout(() => {
        setLinkCopied(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      alert("could not copy link");
    }
  }

  return (
    <>
      <div className="flex gap-x-5">
        <input
          type="text"
          className="border focus:border-black border-gray-400 p-3 w-[500px] inline-block "
          placeholder="Paste your link here"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />

        <LinkShortenButton onClick={generateLink} />
      </div>

      <div className="flex gap-x-5 mt-10">
        <input
          type="text"
          value={shortUrl}
          ref={inputRef}
          readOnly
          className="border border-gray-400 p-3 focus:border-gray-800 w-[500px] inline-block"
        />

        <LinkCopyButton copied={linkCopied} onClick={copyLink} />
      </div>
    </>
  );
}
