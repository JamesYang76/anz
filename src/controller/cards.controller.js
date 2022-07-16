import { StatusCodes } from "http-status-codes";
import db_client from "../db/client.js";
import CardsValidator from "../components/cards_validator.js";
import EncrytedValidator from "../components/encryted_validator.js";
import Crypto from "../components/crypto.js";
import { CRYPTO_KEY, ENCRYPTED_LIST, DECRYPTED_LIST } from "../constants.js";

const crypto = new Crypto(CRYPTO_KEY);

export const tokenizeRequest = (req, res) => {
  const validate = new CardsValidator(req.body).doExec();
  if(validate.ret === true) {
    db_client.del(ENCRYPTED_LIST);
    req.body.forEach(card_number => { db_client.add(ENCRYPTED_LIST, card_number, crypto.doEncrypt(card_number)) });
    db_client.load(ENCRYPTED_LIST).then((val)=>{
      res.status(StatusCodes.OK).json(val);
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: validate.error.message,
      details: validate.error.details
    })
  }
}

export const detokenizeRequest = (req, res) => {
  const validate = new EncrytedValidator(req.body).doExec();

  if(validate.ret === true) {
    db_client.del(DECRYPTED_LIST);
    req.body.forEach(encrypted_data => { db_client.add(DECRYPTED_LIST, encrypted_data, crypto.doDecrypt(encrypted_data)) });
    db_client.load(DECRYPTED_LIST).then((val)=>{
      res.status(StatusCodes.OK).json(val);
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: validate.error.message,
      details: validate.error.details
    })
  }
}
