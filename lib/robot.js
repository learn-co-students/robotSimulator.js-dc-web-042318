class Robot {
	//your solution here

	constructor() {
		this.coordinates = [0, 0]
		this.bearing = 'north'
	}

	setCoordinates(a, b) {
		this.coordinates[0] = a
		this.coordinates[1] = b
	}

	setBearing(bearing) {
		if (bearing === 'north' || bearing === 'south' || bearing === 'west' || bearing === 'east'){
			this.bearing = bearing
		} else {
			throw 'Invalid Robot Bearing'
		}
	}

	place(object) {
		this.coordinates[0] = object.x
		this.coordinates[1] = object.y
		this.setBearing(object.direction)
	}

	turnRight() {
		let bearings = ['north', 'east', 'south', 'west']
		for (let i = 0; i < 4; i++) {
			if (this.bearing === bearings[i]) {
				this.bearing = bearings[(i+1)%4]
				break
			}
		}
	}

	turnLeft() {
		let bearings = ['north', 'west', 'south', 'east']
		for (let i = 0; i < 4; i++) {
			if (this.bearing === bearings[i]) {
				this.bearing = bearings[(i+1)%4]
				break
			}
		}
	}

	advance() {
		if (this.bearing === 'north') {
			this.coordinates[1] += 1
		} else if (this.bearing === 'south') {
			this.coordinates[1] -= 1
		} else if (this.bearing === 'west') {
			this.coordinates[0] -= 1
		} else if (this.bearing === 'east') {
			this.coordinates[0] += 1
		}
	}

	translateInstructions (letters) {
		for (let letter of letters) {
			switch(letter) {
				case 'L': 
					this.turnLeft()
					break
				case 'R':
					this.turnRight()
					break
				case 'A':
					this.advance()
					break
			}
		}
	}
}
