const checkEmail = (email: string) => {
  const emailRegexp = /^[\w_.]+@[a-z]+\.[a-z]+(\.[a-z]{2})?$/;
  const checkedEmail = emailRegexp.test(email);
  return checkedEmail;
};

export default checkEmail;
