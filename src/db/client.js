import redis from "redis";

const redis_client = redis.createClient();
redis_client.connect().then(()=>console.log('Redis connected'));

const db_client = {
  add(list, key, data) {
    redis_client.hSet(list, key, data)
  },

  load(list) {
    return redis_client.hVals(list);
  }
};

export default db_client;
