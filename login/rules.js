import {validationMessages} from './config.js'

const valueLength = 8;

const isEmpty = val => !val;
const isEmail = val => /[^@]+@[^\.]+\..+/.test(val);
const hasCapitalLetter = val => /[A-Z]/g.test(val);
const hasNumber = val => /[0-9]/g.test(val);
const isPasswordValid = val => val.length > valueLength && hasCapitalLetter(val) && hasNumber(val);
const isEqualWith = (val, element) => {
    return  element.value === val;
}

function validate(validation, value) {
    
  const rule = typeof validation === 'string' ? validation : validation.rule;
  switch(rule) {
    case 'required':
      return isEmpty(value) ? validationMessages.required : '';
    case 'email':
      return !isEmail(value) ? validationMessages.invalidEmail : '';
    case  "password" :
      return !isPasswordValid(value) ? validationMessages.invalidPassword : '';
    case 'isEqual':
      return !isEqualWith(value, validation.getElement()) ? validationMessages.invalidRepeatPassword : ''
    default:
      return '';
  }
}

export  {validate}