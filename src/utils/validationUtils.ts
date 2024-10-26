export const validateRequired = (value: string): string | null => {
  if (!value) {
    return 'required';
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  // Email regex
  // 1+ character that is not whitespace or @
  const localPart = '[^\\s@]+';
  // 1 at symbol (@), separates local and domain name
  const atSymbol = '@';
  // 1+ character that is not whitespace or @
  const domainName = '[^\\s@]+';
  // 1 dot (.), separates domain and top-level domain
  const dot = '\\.';
  // 1+ character that is not whitespace or @
  const topLevelDomain = '[^\\s@]+';
  const emailRegex = new RegExp(
    `^${localPart}${atSymbol}${domainName}${dot}${topLevelDomain}$`
  );
  
  if (!email) {
    return 'required';
  }
  if (!emailRegex.test(email)) {
    return 'invalid email format';
  }
  return null;
};

export const validatePassword = (password: string) => {
  // Regex
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const number = /\d/;
  const specialChar = /[`!@#$%^&*(),.?":{}|<>]/;

  if (!password) {
    return 'required';
  }
  if (password.length < 8) {
    return 'minimum 8 characters';
  }
  if (!upperCase.test(password)) {
    return 'at least 1 uppercase';
  }
  if (!lowerCase.test(password)) {
    return 'at least 1 lowercase';
  }
  if (!number.test(password)) {
    return 'at least 1 number';
  }
  if (!specialChar.test(password)) {
    return 'at least 1 special character';
  }
  return null;
};
