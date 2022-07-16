class InputValidator {
  constructor(input) {
    this.inputs = input;
  }

  doExec() {
    let errors = [];

    try {
      if (Array.isArray(this.inputs) === false) throw new Error("Input should be array");
      if (this.inputs.length === 0) throw new Error("There is no input data");

      this.inputs.forEach((data, idx) => {
        //This is child object's function
        if(this.validFormat(data) === false) { errors.push(`index:${idx},data:${data}`) }
      });

      if(errors.length > 0) { throw new Error("There are invalid data", { cause: errors }) }
    }
    catch(e) {
      return {
        ret: false,
        error: {
          message: e.message,
          details: e.cause ? e.cause : []
        }
      }
    }

    return { ret : true };
  }
}

export default InputValidator;