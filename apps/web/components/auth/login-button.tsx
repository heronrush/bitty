"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function LoginButton() {
  return (
    <Button type="submit" className="w-full cursor-pointer" onClick={() => signIn()}>
      Login
    </Button>
  );
}
