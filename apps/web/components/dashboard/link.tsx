"use client";

import CopyIcon from "./copy-icon";
import LinkDeleteIcon from "./link-delete-icon";
// import LinkCopiedIcon from "./link-copied-icon";

type LinkType = {
  originalUrl: string;
  shortUrl: string;
};

export default function Link({ originalUrl, shortUrl }: LinkType) {
  return (
    <div className="mx-10 mt-7 flex w-3/5 justify-between rounded-md border bg-white px-7 py-7 shadow-sm hover:shadow-lg">
      <div>
        {/* this div contains the short url and a copy icon */}
        <div className="flex gap-3">
          <p className="align-middle font-semibold">{shortUrl}</p>
          <div className="relative bottom-1 right-1 flex h-8 w-8 flex-col items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-200">
            <CopyIcon />
            {/* <LinkCopiedIcon /> */}
          </div>
        </div>

        {/* this div contains the long url and an arrow pointer */}
        <div className="mt-1 flex">
          <p>
            <LongUrlArrowPointerIcon />
          </p>
          <p className="text-sm text-gray-700">{originalUrl}</p>
        </div>
      </div>

      {/* this div contains the link delete icon */}
      <div>
        <LinkDeleteIcon />
      </div>
    </div>
  );
}

function LongUrlArrowPointerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-corner-down-right"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" />
    </svg>
  );
}
