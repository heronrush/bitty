"use client";

import { MouseEventHandler } from "react";
import { Button } from "./ui/button";

export default function LinkShortenButton({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button className="h-12 w-28 ml-5 hover:cursor-pointer" onClick={onClick}>
      Shrinkify it
    </Button>
  );
}
