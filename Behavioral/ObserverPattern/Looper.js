const Subject = require('./Subject')

module.exports = class Looper extends Subject{
	constructor(first,last){
		super()
		this.start = first;
		this.state = first;
		this.end   = last;
	}

	run(){
		for(this.state = this.start; this.state< this.end; this.state++){
			this.notifyObservers({
				eventName: "new-index",
				value: this.state
			})
		}
	}
}
