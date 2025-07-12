"use client";

import { invalidUrlAtom, urlAtom } from "@/store/atoms/urlAtom";
import { useAtom, useAtomValue } from "jotai";
import { ChangeEvent } from "react";

export default function LongURLInput() {
  const [url, setUrl] = useAtom(urlAtom);

  function onInputHandle(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        className="border p-2 w-100"
        placeholder="https://www.examplesite.com"
        onChange={onInputHandle}
      />
    </>
  );
}

export function InvalidUrlWarning() {
  const invalidUrl = useAtomValue(invalidUrlAtom);

  return (
    <p className="mb-3 text-red-700 mr-10">
      {invalidUrl ? "Provide a valid url" : ""}
    </p>
  );
}
