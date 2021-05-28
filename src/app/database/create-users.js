import faker from "faker";

export const createUsers = (amount = 1000) => {
  return Promise.all(
    Array(amount)
      .fill(undefined)
      .map(async () => ({
        name: faker.internet.userName(),
      }))
  );
};
