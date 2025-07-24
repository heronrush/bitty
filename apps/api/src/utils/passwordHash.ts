import bcrypt from "bcrypt";

export async function hashPassword(plainTextPassword: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);

  console.log(hashedPassword);

  return hashedPassword;
}
