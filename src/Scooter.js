class Scooter {
  static nextSerial = 1;

  station = null;
  user = null;
  serial = Scooter.nextSerial++;
  charge = 100;
  isBroken = false;

  constructor(station) {
    this.station = station;
  }

  rent() {
    if (this.charge > 20 && !this.isBroken) {
      this.user = "A User";
      this.station = null;
    } else if (this.charge <= 20) {
      throw new Error("Scooter needs to charge");
    } else if (this.isBroken) {
      throw new Error("Scooter needs repair");
    }
  }

  dock(station) {
    this.station = station;
    this.user = null;
  }

  async recharge() {
    console.log("Starting recharge");

    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100;

    console.log("Charge complete");
  }

  async requestRepair() {
    console.log("Scooter repair requested");

    this.isBroken = true;
    await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds

    this.isBroken = false;
    console.log("Repair completed");
  }
}


module.exports = Scooter
