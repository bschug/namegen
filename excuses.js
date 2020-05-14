INTROS = [
	"Excuse me,",
	"Sorry I'm late,",
	"I'm so sorry, but",
	"I apologize,",
	"My deepest apologies,",
	"Sorry about this,",
	"So sorry about this,"
];

PEOPLE = ["wife", "husband", "brother", "kid", "kids", "grandma", "grandpa", "mother", "father", "friend", "girlfriend", "boyfriend", "robot butler", "dog", "cat", "hamster", "doctor"];

PLACES_FOR_PEOPLE = ["doctor", "airport", "supermarket", "pharmacy", "hospital", "cemetary", "zoo", "school", "university", "furniture store", "asylum", "lawyer"];

THINGS_THAT_BREAK = ["car", "computer", "laptop", "monitor", "mouse", "keyboard", "oven", "fridge", "vr headset", "body", "brain", "shoes", "Unity", "Photoshop", "Excel", "bicycle", "motorcycle", "bicycle helmet", "motorcycle helmet", "bed", "chair", "table", "phone", "excuse generator"];

ACTIVITIES = ["driving", "sleeping", "on my way home", "doing groceries", "finishing my tasks", "working overtime", "being busy", "working hard", "going to the airport", "on the train", "swimming", "taking a shower", "feeding my cat", "feeding my dog", "on the phone", "binge drinking", "smoking weed", "faking statistics", "watering the plants"];

THINGS_TO_LOSE = ["glasses", "wallet", "sanity", "beer", "shit", "password", "money", "Facebook password", "Trello account", "keys", "inheritance", "claim to the throne", "trust"];

THINGS_TO_CRASH = ["computer", "car", "bicycle", "motorcycle", "Unity", "Photoshop", "Playstation", "stock market portfolio"];

EMOTIONS = ["angry", "sad", "depressed", "happy", "hungry", "sick", "impatient", "annoying", "annoyed", "excited"];

DESTROYED = ["lost", "crushed", "dropped", "burned", "broke", "forgot", "ate"];

TIMES = ["yesterday", "today", "now", "the other day", "last year", "just now", "recently"];

function generateExcuse()
{
	return generateIntro() + " " + generateReason() + ".";
}

function generateIntro()
{
	return draw(INTROS);
}

function generateReason()
{
	return draw([
		iHadToTakeXtoY,
		myXBrokeDownWhileY,
		iLostSomething,
		myXWasStolen,
		myXAteMyY,
		someonesEmotion,
	])();
}

function iHadToTakeXtoY() { 
	return "I had to take " + someonePassive() + " to the " + draw(PLACES_FOR_PEOPLE) + when(); 
}

function myXBrokeDownWhileY() {
	return "my " + draw(THINGS_THAT_BREAK) + " broke down" + when();
}

function iLostSomething() {
	return "I lost " + someones() + draw(THINGS_TO_LOSE) + when();
}

function destroyedSomething() {
	return someoneActive() + " " + draw(DESTROYED) + someones() + draw(THINGS_THAT_BREAK) + when();
}

function myXWasStolen() {
	return someoneActive() + " stole " + someones() + draw(THINGS_TO_LOSE.concat(THINGS_THAT_BREAK)) + when();
}

function myXAteMyY() {
	return someoneActive() + " ate " + someones() + draw(THINGS_TO_LOSE.concat(THINGS_THAT_BREAK)) + when();
}

function someonesEmotion() {
	return someoneActive() + " got " + draw(EMOTIONS) + " because " + someoneWas() + draw(ACTIVITIES) + when();
}

function someones() {
	return draw(["my ","your ", "someone's ", "my " + draw(PEOPLE) + "'s "]);
}

function someoneActive() {
	return draw(["I", "you", "someone", "my " + draw(PEOPLE)]);
}

function someonePassive() {
	return someones() + draw(PEOPLE);
}

function someoneWas() {
	return draw(["I was ", "you were ", "someone was ", someones() + draw(PEOPLE) + " was "]);
}


function when() {
	return draw([
		"",
		" " + draw(TIMES),
		" while I was " + draw(ACTIVITIES),
		" at the " + draw(PLACES_FOR_PEOPLE),
		" while I was taking my " + draw(PEOPLE) + " to the " + draw(PLACES_FOR_PEOPLE),
		", so I spent too much time " + draw(ACTIVITIES)
	]);
}
