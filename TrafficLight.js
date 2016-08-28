class TrafficLight {
	constructor({name, location}) {
		this.name = name
		this.location = location
		this.status = 'vert'
	}
	_changeStatus(color) {
		this.status = color
		this._changeHtmlColor()
	}
	_changeHtmlColor() {
		document.querySelector(`i.${this.name}`).className = `${this.status} ${this.name}`
	}
	changeToRed() {
		this._changeStatus('orange')
		setTimeout(() => this._changeStatus('rouge'), 3000)
	}
	displayLi() {
		const li = document.createElement('li')
		const button = document.createElement('button')
		const i = document.createElement('i')
		const text = document.createTextNode(` - ${this.name} `)
		i.className = `${this.status} ${this.name}`
		i.innerText = '•'
		button.innerText = '\\o/'
		button.className = this.name
		button.addEventListener('click', (evt) => {
			PomPomGaly.getTrafficLightByName(evt.target.className).changeToRed()
    })
		li.appendChild(i)
		li.appendChild(text)
		li.appendChild(button)
		return li
	}
}