const bearings = ["north", "east", "south", "west"];

class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(dir) {
    if (bearings.includes(dir)) {
      this.bearing = dir;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(pos) {
    this.setCoordinates(pos.x, pos.y);
    this.setBearing(pos.direction);
  }

  turnRight() {
    let dirIndex = bearings.indexOf(this.bearing);
    dirIndex < 3 ? dirIndex++ : (dirIndex = 0);
    this.bearing = bearings[dirIndex];
  }

  turnLeft() {
    let dirIndex = bearings.indexOf(this.bearing);
    dirIndex > 0 ? dirIndex-- : (dirIndex = 3);
    this.bearing = bearings[dirIndex];
  }

  advance() {
    switch (this.bearing) {
      case "north":
        this.coordinates[1]++;
        break;
      case "east":
        this.coordinates[0]++;
        break;
      case "south":
        this.coordinates[1]--;
        break;
      case "west":
        this.coordinates[0]--;
        break;
    }
  }

  translateInstructions(instr) {
    for (let x = 0; x < instr.length; x++) {
      switch (instr[x]) {
        case "A":
          this.advance();
          break;
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
      }
    }
  }
}
