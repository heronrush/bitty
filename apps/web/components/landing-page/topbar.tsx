"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="flex justify-end py-4">
      <div className="mr-40 flex gap-10">
        <button
          onClick={() => {
            signIn("/api/auth/signin");
          }}
          className="cursor-pointer rounded-sm px-5 py-2 font-semibold hover:bg-neutral-100"
        >
          Login
        </button>

        <button className="cursor-pointer rounded-sm px-5 py-2 font-semibold hover:bg-neutral-100">
          <Link href="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
}
