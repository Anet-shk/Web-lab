const emailFieldsRegExp = /\w+@\w+\.\w+/;

export default function isUserEmailValid(email) {
  const isEmailValid = emailFieldsRegExp.test(email);
  if (!isEmailValid) {
    throw new Error(`user has not valid email ${email}`);
  }
  return isEmailValid;
}