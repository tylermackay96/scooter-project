const Scooter = require('../src/Scooter')
const User = require('../src/User')

const scooter = new Scooter("Station 1");

test("Scooter initial state", () => {
  expect(scooter.station).toBe("Station 1");
  expect(scooter.user).toBe(null);
  expect(scooter.charge).toBe(100);
  expect(scooter.isBroken).toBe(false);
});

test("Rent Scooter", () => {
  scooter.rent();
  expect(scooter.station).toBe(null);
  expect(scooter.user).toBe("A User");
});

test("Dock Scooter", () => {
  scooter.dock("Station 2");
  expect(scooter.station).toBe("Station 2");
  expect(scooter.user).toBe(null);
});

test("Recharge Scooter", async () => {
  await scooter.recharge();
  expect(scooter.charge).toBe(100);
});

test("Request Repair", async () => {
  scooter.requestRepair();
  expect(scooter.isBroken).toBe(true);

  await new Promise(resolve => setTimeout(resolve, 6000));
  expect(scooter.isBroken).toBe(false);
});
