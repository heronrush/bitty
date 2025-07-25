"use client";

import { displayModalAtom } from "@/store/atoms/modalAtom";
import { useSetAtom } from "jotai";

export default function ModalCloseIcon() {
  const setModalOff = useSetAtom(displayModalAtom);

  return (
    <button
      onClick={() => setModalOff(false)}
      className="flex h-8 w-8 flex-col items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-300"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </div>
    </button>
  );
}
