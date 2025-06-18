"use client";

import { MouseEventHandler } from "react";
import { Button } from "./ui/button";

export default function LinkCopyButton({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button className="h-12 w-28 ml-5 hover:cursor-pointer" onClick={onClick}>
      Copy
    </Button>
  );
}
