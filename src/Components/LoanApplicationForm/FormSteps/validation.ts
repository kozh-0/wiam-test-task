export const phoneValidator = (_: any, value: string) => {
  if (!value) {
    return Promise.reject(new Error("Пожалуйста, введите телефон"));
  }

  const phoneRegex = /^0\d{3} \d{3} \d{3}$/;
  if (!phoneRegex.test(value)) {
    return Promise.reject(new Error("Формат: 0XXX XXX XXX"));
  }

  return Promise.resolve();
};

export const requiredValidator = (_: any, value: any) => {
  if (!value) {
    return Promise.reject(new Error("Это поле обязательно для заполнения"));
  }
  return Promise.resolve();
};
