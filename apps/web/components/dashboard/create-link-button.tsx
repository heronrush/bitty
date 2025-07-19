"use client";

import { useSetAtom } from "jotai";
import { displayModalAtom } from "@/store/atoms/modalAtom";

export default function CreateLinkButton() {
  const setDisplayModal = useSetAtom(displayModalAtom);

  function handleClick() {
    setDisplayModal(true);
  }

  return (
    <>
      <button
        className="w-30 relative bottom-2 mr-6 mt-4 h-10 cursor-pointer rounded-md border bg-neutral-800 px-2 py-1.5 align-middle font-semibold text-gray-50 hover:bg-neutral-700"
        onClick={handleClick}
      >
        Create link
      </button>
    </>
  );
}
