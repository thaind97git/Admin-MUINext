export const required = value => (value ? undefined : 'Required field.');

export const emailValidation = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address.'
    : undefined;

export const passwordValidation = value =>
  value && !/^(?=.*).{8,}$/.test(value)
    ? 'Password must be at least 8 characters'
    : undefined;
