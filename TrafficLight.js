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
		li.innerHTML = `
			<li>
				<i class="${this.status} ${this.name}">•</i> - ${this.name}
			</li>`
		return li
	}
}