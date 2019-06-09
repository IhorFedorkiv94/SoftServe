const emailRules = ['required', 'email'];
const passwordRules = ['required', 'password'];
const repeatPasswordRules = ['required', 'password', { rule: 'isEqual', getElement: () => password }] 

const validationMessages = {
    required: 'Field is empty, please provide some value',
    invalidEmail: 'Please provide a valid email',
    invalidPassword: 'Password not valid',
    invalidRepeatPassword: 'Repeat password'
    
};

export  {emailRules, passwordRules, repeatPasswordRules, validationMessages}