export const phoneValidator = (_: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error("Please, enter your phone number"));
  }

  const phoneRegex = /^0\d{3} \d{3} \d{3}$/;
  if (!phoneRegex.test(value)) {
    return Promise.reject(new Error("Format: 0XXX XXX XXX"));
  }

  return Promise.resolve();
};

export const requiredValidator = (_: any, value: any) => {
  if (!value) {
    return Promise.reject(new Error("This field is required"));
  }
  return Promise.resolve();
};
