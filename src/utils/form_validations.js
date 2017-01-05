/* ------------------------------------------------------------------------------
* form_validations.js
*
* validations functions for form input
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
const notEmpty = value => value ? undefined : 'Необходимо'

const withoutSpaces = str => 
  str && /^(\s|\S)+$/i.test(str) ? 'Не должно быть пробелов' : undefined;

const withoutSpecialChars = str => 
  str && /\W+/i.test(str) ? 'Только буквы, числа и нижнее подчеркивание' : undefined;

const minLength = min => str =>
  str && (str.length < min) ? `Должно быть не меньше ${min} символов` : undefined

const passwordEqual = (value, {password}) => 
  value === password ? undefined : 'Пароли должны совпадать'

export {notEmpty, minLength, passwordEqual, withoutSpaces, withoutSpecialChars};