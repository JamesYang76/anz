import express from "express";
import bodyParser from "body-parser";
import { StatusCodes } from "http-status-codes";

import  cardRouter from "./routes/cards.routes.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use("/", cardRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = StatusCodes.NOT_FOUND;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).send({
    error: {
      status: error.status || StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message || 'Internal Server Error',
    },
  });
})

export default app;
