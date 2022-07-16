import CardsValidator from "../components/cards_validator.js";

describe("CardsValidator", () => {
  test("doExec should return {ret: true}", ()=> {
    const input_cards_numbers = [
      "1111-2222-3333-4444",
      "2222-2222-3333-4444",
      "3333-2222-3333-4444",
    ];

    const parser = new CardsValidator(input_cards_numbers);
    expect(parser.doExec().ret).toBe(true);
  });

  test("doExec should return false with error when  empty input", ()=> {
    const input_cards_numbers = [];
    const parser = new CardsValidator(input_cards_numbers);
    let result = parser.doExec();

    expect(result.ret).toBe(false);
    expect(result.error.message).toBe("There is no input data");
  });

  test("doExec should return false with details when some inputs are wrong", ()=> {
    const input_cards_numbers = [
      '1111-2222-3333-4444',
      'safsasa',
      '44444444',
    ];

    const parser = new CardsValidator(input_cards_numbers);
    let result = parser.doExec();

    expect(result.ret).toBe(false);
    expect(result.error.message).toBe("There are invalid data");
    expect(result.error.details[0]).toBe(`index:1,data:${input_cards_numbers[1]}`);
    expect(result.error.details[1]).toBe(`index:2,data:${input_cards_numbers[2]}`);
  });
})
