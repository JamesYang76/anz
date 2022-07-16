import express from "express";
import {tokenizeRequest, detokenizeRequest} from "../controller/cards.controller.js";

const cardRouter = express.Router();
cardRouter.post("/tokenize", tokenizeRequest);
cardRouter.post("/detokenize", detokenizeRequest);

export default cardRouter;
