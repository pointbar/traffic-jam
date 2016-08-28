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
	listGreenTrafficLight(color) {
		return this.trafficLights.filter(tl => tl.status === color)
			.map(tl => tl.name)
	}
	getTrafficLightByName(name) {
		return this.trafficLights.find(tl => tl.name === name)
	}
	displayNetwork(className) {
		this.listTrafficLight().map(name => {
			const trafficLight = this.getTrafficLightByName(name)
			const li =  document.createElement('li')
			li.innerHTML = `<li><i class="${trafficLight.status}">•</i> - ${name}</li>`
			document.querySelector(`ul.${className}`).appendChild(li)
		})
	}
}
