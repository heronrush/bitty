"use client";

import { invalidUrlAtom, urlAtom } from "@/store/atoms/urlAtom";
import { useAtomValue, useSetAtom } from "jotai";
import { ChangeEvent } from "react";

export default function LongURLInput() {
  const setUrl = useSetAtom(urlAtom);

  function onInputHandle(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        className="w-120 focus:outline-3 rounded-sm border border-gray-400 p-2 outline-none focus:border-gray-700"
        placeholder="https://www.examplesite.com"
        onChange={onInputHandle}
      />
    </>
  );
}

export function InvalidUrlWarning() {
  const invalidUrl = useAtomValue(invalidUrlAtom);

  return <p className="mb-3 mr-10 text-red-700">{invalidUrl ? "Provide a valid url" : ""}</p>;
}
