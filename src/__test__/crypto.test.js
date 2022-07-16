import Crypto from "../components/crypto.js";
import { CRYPTO_KEY } from "../constants.js";

const card_number = "1111-2222-3333-4444";
const crypto = new Crypto(CRYPTO_KEY);

describe("Crypto", () => {
  test("doEncrypt should return  Encrypted Data", ()=> {
    const encryptedData = crypto.doEncrypt(card_number);
    expect(encryptedData).not.toBe(card_number);
  });

  test("doDecrypt should return Original Data", ()=> {
    const decryptedData = crypto.doDecrypt(crypto.doEncrypt(card_number))
    expect(decryptedData).toBe(card_number);
  });
})
