class Network {
	constructor() {
		this.trafficLights = []
	}
	addTrafficLight(trafficLight) {
		this.trafficLights.push(trafficLight)
	}
	listTrafficLight() {
		return this.trafficLights.map(tl => tl.name)
	}
	getTrafficLightByName(name) {
		return this.trafficLights.find(tl => tl.name === name)
	}
	displayNetwork(className) {
		console.log('className', this.listTrafficLight())
		this.listTrafficLight().map(name => {
			const li = this.getTrafficLightByName(name).displayLi()
			document.querySelector(`ul.${className}`).appendChild(li)
		})
	}
}
