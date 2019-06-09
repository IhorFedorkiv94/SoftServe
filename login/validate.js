import { validate} from './rules.js'

export function validateInput(rules) {
    return function(event) {
        const { value } = event.target;
        //const value = event.target.value;
        clearErrorMessage(event.target);
        for (let i = 0; i < rules.length; i++) {
          const error = validate(rules[i], value);
          error ? displayErrorMessage(event.target, error) : ""
        }
    }
  }

  function clearErrorMessage(element) {
      const errorMessageEl = element.nextElementSibling;
      element.classList.remove("has-error");
      if (errorMessageEl && errorMessageEl.className.indexOf('error-message') !== -1) {
        errorMessageEl.remove()
      }
    }
  
  function displayErrorMessage(element, errorMessage) {
    const errorMessageElement = document.createElement("span");
    errorMessageElement.classList.add('error-message');
    errorMessageElement.innerText = errorMessage;
    element.classList.add('has-error');
    element.parentNode.insertBefore(errorMessageElement, element.nextSibling);
  }
