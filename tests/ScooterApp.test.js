const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const assert = require("assert");


class Scooter {
  constructor() {
    this.station = null;
    this.user = null;
  }
}

describe("ScooterApp", () => {
  let app;

  beforeEach(() => {
    app = new ScooterApp();
  });

  it("should register a user", () => {
    const user = app.registerUser("john", "secret", 21);
    assert.deepEqual(user, {
      username: "john",
      password: "secret",
      age: 21,
      loggedIn: false
    });
  });

  it("should throw an error if the user is already registered", () => {
    app.registerUser("john", "secret", 21);
    assert.throws(() => {
      app.registerUser("john", "secret", 21);
    }, Error, "User already registered.");
  });

  it("should throw an error if the user is too young to register", () => {
    assert.throws(() => {
      app.registerUser("john", "secret", 17);
    }, Error, "Too young to register.");
  });

  it("should login a user", () => {
    app.registerUser("john", "secret", 21);
    app.loginUser("john", "secret");
    assert.deepEqual(app.registeredUsers.john, {
      username: "john",
      password: "secret",
      age: 21,
      loggedIn: true
    });
  });

  it("should throw an error if the username or password is incorrect", () => {
    app.registerUser("john", "secret", 21);
    assert.throws(() => {
      app.loginUser("john", "incorrect");
    }, Error, "Username or password is incorrect.");
  });

  it("should logout a user", () => {
    app.registerUser("john", "secret", 21);
    app.loginUser("john", "secret");
    app.logoutUser("john");
    assert.deepEqual(app.registeredUsers.john, {
      username: "john",
      password: "secret",
      age: 21,
      loggedIn: false
    });
  });

  it("should throw an error if the user is not logged in", () => {
    app.registerUser("john", "secret", 21);
    assert.throws(() => {
      app.logoutUser("john");
    }, Error, "No such user is logged in.");
  });

  it("should create a scooter", () => {
    const scooter}
