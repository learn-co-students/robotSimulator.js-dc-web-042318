class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  setCoordinates(coordinate1, coordinate2) {
    this.coordinates = [coordinate1, coordinate2];
  }

  setBearing(bearing) {
    const validBearings = ['north', 'south', 'east', 'west'];
    if (validBearings.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw 'Invalid Robot Bearing';
    }
  }

  place(directions) {
    this.setCoordinates(directions.x, directions.y);
    this.setBearing(directions.direction);
  }

  turnRight() {
    const directions = {
      north: 'east',
      east: 'south',
      south: 'west',
      west: 'north',
    };
    this.bearing = directions[this.bearing];
  }

  turnLeft() {
    const directions = {
      north: 'west',
      east: 'north',
      south: 'east',
      west: 'south',
    };
    this.bearing = directions[this.bearing];
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1] += 1;
        break;
      case 'south':
        this.coordinates[1] -= 1;
        break;
      case 'east':
        this.coordinates[0] += 1;
        break;
      case 'west':
        this.coordinates[0] -= 1;
        break;
    }
  }

  translateInstructions(instructions) {
    const instructionsArray = instructions.split('');
    instructionsArray.forEach((instruction) => {
      switch (instruction.toLowerCase()) {
        case 'l':
          this.turnLeft();
          break;
        case 'r':
          this.turnRight();
          break;
        case 'a':
          this.advance();
          break;
      }
    });
  }
}
