import { StatusCodes } from "http-status-codes";
import request from "supertest";
import app from "../app.js";

jest.mock("../db/client", () => {
  return {
    add() {},
    load() {
      return new Promise((rev)=>rev(1));
    }
  };
});

describe("tokenize", () => {
  test("It should response the Post method", done => {
    request(app)
    .post("/tokenize")
    .send(['4111-1111-1111-1111','4444-3333-2222-1111'])
    .then(response => {
      expect(response.statusCode).toBe(StatusCodes.OK);
      done();
    });
  });
});

describe("detokenize", () => {
  test("It should response the Post method", done => {
    request(app)
    .post("/detokenize")
    .send(['tokenizeddata','tokenizeddata2'])
    .then(response => {
      expect(response.statusCode).toBe(StatusCodes.OK);
      done();
    });
  });
});

describe("invalid url", () => {
  test("It should response 404", done => {
    request(app)
    .get("/invalid")
    .then(response => {
      expect(response.statusCode).toBe(StatusCodes.NOT_FOUND);
      done();
    });
  });
});
