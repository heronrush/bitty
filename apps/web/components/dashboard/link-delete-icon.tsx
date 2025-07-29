"use client";

/*
export default function LinkDeleteIcon() {
  return (
    <button className="relative top-2 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ed473b"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10l4 4m0 -4l-4 4" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      </svg>
    </button>
  );
}
*/

export default function LinkDeleteButton() {
  return (
    <button className="relative top-2 cursor-pointer rounded-sm border bg-red-500 px-4 py-2 font-semibold text-white hover:bg-red-400">
      Delete
    </button>
  );
}
