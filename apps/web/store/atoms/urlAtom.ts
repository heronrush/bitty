import axios from "axios";
import { atom } from "jotai";
import { loadable } from "jotai/utils";

export const urlAtom = atom("");

export const invalidUrlAtom = atom((get) => {
  const validCharacters = get(urlAtom);

  if (!validCharacters.startsWith("https://")) {
    return true;
  } else {
    return false;
  }
});

// this is the atom which fetches the generated short url from the db
export const asyncShortUrlAtom = atom(async (get) => {
  axios.post(`http://localhost:3000/}`);
});

// this atom's name should be prefixed with `loadable` but i changed it
export const shortUrlAtom = loadable(asyncShortUrlAtom);
