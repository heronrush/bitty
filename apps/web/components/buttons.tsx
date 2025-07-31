"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      className="relative bottom-2 mr-6 mt-4 h-10 cursor-pointer rounded-md border bg-neutral-800 px-3 py-1.5 align-middle font-semibold text-gray-50 hover:bg-neutral-700"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
