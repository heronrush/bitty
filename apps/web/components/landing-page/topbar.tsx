"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="flex justify-between py-2">
      <div></div>
      <div className="flex gap-10 pr-10">
        <button
          onClick={() => {
            signIn("/api/auth/signin");
          }}
          className="cursor-pointer rounded-sm border bg-neutral-100 px-5 py-2 font-semibold hover:bg-neutral-200"
        >
          Login
        </button>

        <button className="cursor-pointer rounded-sm border bg-neutral-100 px-5 py-2 font-semibold hover:bg-neutral-200">
          <Link href="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
}
