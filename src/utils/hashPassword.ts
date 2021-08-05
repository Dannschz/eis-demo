import bcrypt from 'bcrypt';

export default async function hashPassword(
  textPassword: string,
  saltRounds = 10
): Promise<string> {
  return bcrypt.hash(textPassword, saltRounds);
}
