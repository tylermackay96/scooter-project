const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {
      station1: [],
      station2: [],
      station3: []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("User already registered.");
    } else if (age < 18) {
      throw new Error("Too young to register.");
    } else {
      this.registeredUsers[username] = new User(username, password, age);
      console.log(`${username} has been registered.`);
      return this.registeredUsers[username];
    }
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("Username or password is incorrect.");
    } else {
      user.login(password);
      console.log(`${username} has logged in.`);
    }
  }

  logoutUser(username) {
    const user = this.registeredUsers[username];
    if (!user) {
      throw new Error("No such user is logged in.");
    } else {
      user.logout();
      console.log(`${username} is logged out.`);
    }
  }

  createScooter(station) {
    if (!this.stations[station]) {
      throw new Error("No such station.");
    } else {
      const scooter = new Scooter();
      this.stations[station].push(scooter);
      scooter.station = station;
      console.log("Created new scooter.");
      return scooter;
    }
  }

  dockScooter(scooter, station) {
    if (!this.stations[station]) {
      throw new Error("No such station.");
    } else if (scooter.station === station) {
      throw new Error("Scooter already at station.");
    } else {
      this.stations[station].push(scooter);
      scooter.station = station;
      console.log("Scooter is docked.");
    }
  }

  rentScooter(scooter, user) {
    if (scooter.user) {
      throw new Error("Scooter already rented.");
    } else {
      for (const station in this.stations) {
        const index = this.stations[station].indexOf(scooter);
        if (index !== -1) {
          this.stations[station].splice(index, 1);
          scooter.user = user;
          console.log("Scooter is rented.");
          break;
        }
      }
    }
  }

  print() {
    console.log("Registered Users:");
    console.log(this.registeredUsers);

    console.log("Scooter Stations:");
    for (const station in this.stations) {
      console.log(`${station}: ${this.stations[station].length} scooters`);
    }
  }
}


module.exports = ScooterApp
