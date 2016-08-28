class Network {
	constructor() {
		this.trafficLights = []
	}
	_changeAllStatus() {
		this.listTrafficLight().map(tl => {
			tl.toggleStatus()
		})
	}
	automaticTraffic() {
		setInterval(() => this._changeAllStatus(), 10000)
	}
	addTrafficLight(trafficLight) {
		this.trafficLights.push(trafficLight)
	}
	listTrafficLight() {
		return this.trafficLights
	}
	listTrafficLightByColor(color) {
		return this.trafficLights.filter(tl => tl.status === color)
			.map(tl => tl.name)
	}
	getTrafficLightByName(name) {
		return this.trafficLights.find(tl => tl.name === name)
	}
	displayNetwork(className) {
		this.listTrafficLight().map(tl => {
			const li = tl.displayLi()
			document.querySelector(`ul.${className}`).appendChild(li)
		})
	}
}
