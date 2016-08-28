const PomPomGaly = new Network()

document.addEventListener('DOMContentLoaded', () => {
	fixtures(PomPomGaly)
	PomPomGaly.displayNetwork('pompomgali')
	PomPomGaly.automaticTraffic()
})

const fixtures = (network) => {
	network.addTrafficLight(
		new TrafficLight({name: 'Kawaï', location: {lat: 1, lg: 10}}))
	network.addTrafficLight(
		new TrafficLight({name: 'Awaï', location: {lat: 1, lg: 10}}))
	network.addTrafficLight(
		new TrafficLight({name: 'Sawaï', location: {lat: 1, lg: 10}}))
	network.addTrafficLight(
		new TrafficLight({name: 'Lwaï', location: {lat: 1, lg: 10}}))
}