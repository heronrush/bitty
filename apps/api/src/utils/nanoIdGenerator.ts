import { customAlphabet } from "nanoid";

// generates a random nanoid, but not the full short url
export function nanoidGenerator() {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const customAlpha = `${uppercaseLetters}${lowercaseLetters}`;

  const id = customAlphabet(customAlpha, 6);

  return id();
}
