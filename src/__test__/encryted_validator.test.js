import EncrytedValidator from "../components/encryted_validator.js";

describe("EncrytedValidator", () => {
  test("doExec should return {ret: true}", ()=> {
    const encrypted_data = [
      "U2FsdGVkX18uof+Rl7kvroRg5YgUsSuAk92v37brGDOlLU1H3ekJd95Fk6ts5BK9",
      "U2FsdGVkX18tU8bSWZZLSgBXQaDEhJpJsqCS3gQAhUzr11d65BLPQ3LQEp2ctO0a"
    ];

    const parser = new EncrytedValidator(encrypted_data);
    expect(parser.doExec().ret).toBe(true);
  });

  test("doExec should return false with error when  empty input", ()=> {
    const encrypted_data = [];
    const parser = new EncrytedValidator(encrypted_data);
    let result = parser.doExec();

    expect(result.ret).toBe(false);
    expect(result.error.message).toBe("There is no input data");
  });

  test("doExec should return false with details when some inputs are wrong", ()=> {
    const encrypted_data = [
      "U2FsdGVkX18uof+Rl7kvroRg5YgUsSuAk92v37brGDOlLU1H3ekJd95Fk6ts5BK9",
      "",
      "",
    ];

    const parser = new EncrytedValidator(encrypted_data);
    let result = parser.doExec();

    expect(result.ret).toBe(false);
    expect(result.error.message).toBe("There are invalid data");
    expect(result.error.details[0]).toBe(`index:1,data:${encrypted_data[1]}`);
    expect(result.error.details[1]).toBe(`index:2,data:${encrypted_data[2]}`);
  });
})
