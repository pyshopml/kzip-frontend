/* ------------------------------------------------------------------------------
* form_validations.js
*
* validations functions for form input
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
const notEmpty = value => (
  value ? undefined : 'Необходимо'
);

const withoutSpecialChars = str => (
  str && /\W+/i.test(str) ? 'Только буквы, числа и нижнее подчеркивание' : undefined
);

const minLength = min => str => (
  str && (str.length < min) ? `Должно быть не меньше ${min} символов` : undefined
);

const passwordEqual = (value, { password }) => (
  value === password ? undefined : 'Пароли должны совпадать'
);

export { notEmpty, minLength, passwordEqual, withoutSpecialChars };
