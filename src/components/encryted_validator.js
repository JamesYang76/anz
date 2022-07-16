import InputValidator from "./input_validator.js";

class EncrytedValidator extends InputValidator{
  constructor(input) {
    super(input);
  }

  //This is call from parent object
  validFormat(data) {
    if(typeof data !== 'string') return false;
    return data.length !== 0;
  }
}

export default EncrytedValidator;
