const Observer = require("./Observer")

class PrimeNotifier extends Observer{ constructor(){
		super();
	}

	isPrime(nbr) {
		for(var i = 2; i < nbr; i++)
			if(nbr%i === 0) return false;
		return nbr > 1;
	}

	eventIsRelevant(event){
		return (event.eventName == "new-index" && this.isPrime(event.value) )
	}

	reactToEvent(event){
		console.log("-----------------")
		console.log("Prime number found!")
		console.log(event.value)
		console.log("-----------------")
	}

	
}

module.exports = PrimeNotifier
