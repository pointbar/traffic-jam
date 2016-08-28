class TrafficLight {
	constructor({name, location}) {
		this.name = name
		this.location = location
		this.status = 'vert'
	}
	_changeStatus(color) {
		this.status = color
		console.log(`Le feu ${this.name} est ${this.status}`)
	}
	changeToRed() {
		this._changeStatus('orange')
		setTimeout(() => this._changeStatus('rouge'), 3000)
	}
}