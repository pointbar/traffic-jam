class TrafficLight {
	constructor({name, location}) {
		this.name = name
		this.location = location
		this.status = 'vert'
	}
	changeToRed() {
		this.status = 'rouge'
	}
}