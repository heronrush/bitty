"use client";

import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      className="cursor-pointer rounded-sm border bg-black px-5 py-2 text-white"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}
