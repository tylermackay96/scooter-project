class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if (password === this.password) {
      this.loggedIn = true;
    } else {
      throw new Error("Incorrect password.");
    }
  }

  logout() {
    this.loggedIn = false;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`${this.username}'s age has been updated to ${this.age}.`);
  }

  updatePassword(newPassword) {
    this.password = newPassword;
    console.log(`${this.username}'s password has been updated.`);
  }
}

module.exports = User
