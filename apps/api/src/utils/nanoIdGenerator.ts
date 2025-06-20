import { customAlphabet } from "nanoid";

export function nanoidGenerator() {
  const numberOfCharacters = Math.random() * 10;
  console.log(numberOfCharacters);

  const id = customAlphabet("ABCDE", 8);

  const nanoid = id();
  console.log(nanoid);
}

nanoidGenerator();
