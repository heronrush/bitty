"use client";

// // import { shortUrlAtom } from "@/store/atoms/urlAtom";
// import { useAtomValue } from "jotai";
// import { toast } from "sonner";

// async function copyTextToClipboard(textToCopy: string) {
//   try {
//     await navigator.clipboard.writeText(textToCopy);
//     toast("Short URL copied to clipboard successfully!");
//   } catch (err: unknown) {
//     console.log(err);
//     alert("Failed to copy url, do it manually");
//   }
// }

export default function CopyIcon() {
  // const shortUrl = useAtomValue(shortUrlAtom);

  return (
    // <button onClick={() => copyTextToClipboard(shortUrl)}>
    <button>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-copy hover:cursor-pointer"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
          <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
        </svg>
      </div>
    </button>
  );
}
