import { VALID_CARD_NUMBER_LEN } from "../constants.js";
import InputValidator from "./input_validator.js";

class CardsValidator extends InputValidator {
  constructor(input) {
    super(input);
  }

  //This is call from parent object
  validFormat(data) {
    if(typeof data !== 'string') return false;
    let only_number = data.replace(/-/g,"");
    if(only_number.length !== VALID_CARD_NUMBER_LEN) return false;
    return this.onlyNumbers(only_number) !== false;
  }
  onlyNumbers(only_numbers) {
    return /^[0-9]+$/.test(only_numbers);
  }
}

export default CardsValidator;
