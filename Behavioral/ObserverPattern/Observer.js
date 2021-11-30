class Observer{
	
	update(event){
		if(this.eventIsRelevant(event)){
			this.reactToEvent(event)
		}
	}

	eventIsRelevant(){
		throw new Error("eventIsRelevant: This needs to be implemented.")
	}
	
	reactToEvent(){
		throw new Error("reactToEvent: This needs to be implemented.")
	}
}

module.exports = Observer;
