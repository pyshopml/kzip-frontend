/* ------------------------------------------------------------------------------
* form_validations.js
*
* validations functions for form input
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
const notEmpty = value => value ? undefined : 'Необходимо'

const minLength = min => str =>
  str && (str.length < min) ? `Должно быть не меньше ${min} символов` : undefined

const passwordEqual = (value, {password}) => 
  value === password ? undefined : 'Пароли должны совпадать'

export {notEmpty, minLength, passwordEqual};