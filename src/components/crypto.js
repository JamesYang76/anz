import CryptoJS from "crypto-js";

class Crypto {
  constructor(key) {
    this.key = key;
  }

  doEncrypt(source) {
    return CryptoJS.AES.encrypt(source, this.key).toString();
  }

  doDecrypt(encrypted_data) {
    let bytes = CryptoJS.AES.decrypt(encrypted_data, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}

export default Crypto;
