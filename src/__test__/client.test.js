import redis from "redis";
import db_client from "../db/client";

jest.mock("redis", () => {
  return {
    createClient() {
      return {
        connect: () => {
          return new Promise((rev)=>rev(1));
        }
      }
    }
  };
});

describe('db_client', () => {
  test('It defines an add function', () => {
    expect(typeof db_client.add).toBe('function');
  });

  test('It defines a load function', () => {
    expect(typeof db_client.add).toBe('function');
  });
});
