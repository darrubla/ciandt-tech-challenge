/* eslint-disable import/prefer-default-export */
const isVaildEmail = (email) => {
  const regexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g
  return email.match(regexp)
}

export { isVaildEmail }
