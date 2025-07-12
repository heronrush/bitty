import { atom } from "jotai";

export const urlAtom = atom("");

export const invalidUrlAtom = atom((get) => {
  const validCharacters = get(urlAtom);

  if (!validCharacters.startsWith("https://")) {
    return true;
  } else {
    return false;
  }
});

export const shortUrlAtom = atom("");
