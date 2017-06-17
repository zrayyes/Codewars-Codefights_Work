function validate(password) {
  /*
  At least six characters long
  contains a lowercase letter
  contains an uppercase letter
  contains a number  
  */
  return /(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$)/.test(password);
}
