const Observer = require("./Observer")

class OddNotifier extends Observer{ constructor(){
		super();
	}

	eventIsRelevant(event){
		return (event.eventName == "new-index" && event.value%2 !=0 )
	}

	reactToEvent(event){
		console.log("-----------------")
		console.log("Odd number found!")
		console.log(event.value)
		console.log("-----------------")
	}
}

module.exports = OddNotifier
