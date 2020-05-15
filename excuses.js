INTROS = [
	"Sorry I'm late,",
    "Sorry for the delay,",
	"I know I'm late, but",
	"I apologize for being late,",
	"Sorry about the time,",
	"Sorry about this, but",
	"So sorry about this, but"
];

PEOPLE = ["wife", "husband", "brother", "kid", "grandma", "grandpa", "mother", "father", "friend", "girlfriend", "boyfriend", "imaginary friend", "dog", "cat", "hamster", "doctor", "chicken"];

PLACES_FOR_PEOPLE = ["doctor", "airport", "supermarket", "pharmacy", "hospital", "cemetary", "zoo", "school", "university", "mental hospital", "divorce lawyer", "police", "restaurant", "B&uuml;rgeramt", "homeless shelter"];

THINGS_THAT_BREAK = ["car", "computer", "laptop", "monitor", "mouse", "keyboard", "oven", "fridge", "VR headset", "body", "brain", "shoes", "git repository", "Photoshop", "Excel", "bicycle", "motorcycle", "bicycle helmet", "motorcycle helmet", "bed", "chair", "table", "phone", "excuse generator"];

ACTIVITIES = ["driving", "sleeping", "on my way home", "doing groceries", "finishing my tasks", "working overtime", "being busy", "working hard", "going to the airport", "on the train", "swimming", "taking a shower", "feeding my cat", "feeding my dog", "on the phone", "binge drinking", "smoking weed", "faking statistics", "watering the plants", "playing video games", "planning", "drinking coffee", "doing drugs", "coming up with an excuse"];

THINGS_TO_LOSE = ["glasses", "wallet", "sanity", "beer", "shit", "password", "money", "Facebook password", "Trello account", "keys", "inheritance", "claim to the throne", "trust", "shirt", "clothes", "underwear", "cocaine", "argument", "dignity", "excuse", "homework", "face mask", "virginity"];

THINGS_TO_CRASH = ["computer", "car", "bicycle", "motorcycle", "Unity", "Photoshop", "Playstation", "stock market portfolio"];

EMOTIONS = ["angry", "sad", "depressed", "happy", "hungry", "sick", "impatient", "annoyed", "excited", "bored", "lazy", "scared", "anxious", "agitated"];

DESTROYED = ["lost", "crushed", "dropped", "burned", "broke", "forgot", "ate"];

TIMES = ["yesterday", "today", "now", "the other day", "last year", "just now", "recently", "this morning"];

BAD_THINGS = ["gas prices", "death", "capitalism", "the heat death of the universe", "our project", "the future", "the past", "politics", "my drug addiction", "my second marriage", "my lost youth", "all the lost opportunities", "starving children", "last night", "all my past mistakes", "when I became old", "why I don't understand those kids anymore", "the stupidity of our species", "asteroid impacts", "supervolcanos", "tsunamis", "global warming", "global extinction events", "pandemics", "the zombie apocalypse"];

function generateExcuse()
{
	return generateIntro() + " " + generateReason() + ".";
}

function generateIntro()
{
	return draw(INTROS);
}

/*function _generateReason() {
	do {
		var reason = generateReason();
	} while (!reason.includes("virginity"))
	return reason;
}*/

function generateReason()
{
	return draw([
		someoneWasDoingSomething,
		iHadToTakeXtoY,
		iHadToPickUpXfromY,
		myXBrokeDownWhileY,
		iLostSomething,
		myXWasStolen,
		someonesEmotion,
		iWasBusy,
		iGotArrested,
		weather,
		thinkingAboutBadThings,
		iHadADream,
		someoneDidXatY
	])();
}

function someoneDidXatY() {
  return someoneActive() + " was " + activity() + " at the " + draw(PLACES_FOR_PEOPLE) + when();
}

function iHadADream() {
	return "I had a really cool dream where " + someoneActive() + " was " + activity() + when();
}

function thinkingAboutBadThings() {
	return someoneWas() + draw([" thinking", " talking", " discussing with " + someoneElse()]) + " about " + draw(BAD_THINGS);
}

function weather() {
	return draw(["it was raining", "the weather was so nice", "it was cloudy", "it was too cold outside", "it was too hot outside"]);
}

function iGotArrested() {
	return draw([someoneActive() + " got ", "I almost got "]) + draw([
		function() { return "arrested for " + activity() },
		function() { return "arrested" + when() },
		function() { return "caught " + activity() }
	])();
}

function iWasBusy() {
	return "I was busy " + activity();
}

function iHadToTakeXtoY() { 
	return "I had to take " + someonePassive() + " to the " + draw(PLACES_FOR_PEOPLE) + when(); 
}

function iHadToPickUpXfromY() {
	return "I had to pick up " + someonePassive() + " from the " + draw(PLACES_FOR_PEOPLE) + when();
}

function myXBrokeDownWhileY() {
	return "my " + draw(THINGS_THAT_BREAK) + " broke down" + when();
}

function iLostSomething() {
	return someoneActive() + " lost " + someones() + draw(THINGS_TO_LOSE) + when();
}

function destroyedSomething() {
	return someoneActive() + " " + draw(DESTROYED) + someones() + draw(THINGS_THAT_BREAK) + when();
}

function myXWasStolen() {
	return someoneElse() + " stole " + someones() + draw(THINGS_TO_LOSE.concat(THINGS_THAT_BREAK).concat(PEOPLE)) + when();
}

function someoneWasDoingSomething() {
	return someoneWas() + activity() + when();
}

function someonesEmotion() {
	return draw([
		function() { return someoneActive() + " was " + draw(EMOTIONS) + when() },
		function() { return someoneActive() + " was " + draw(EMOTIONS) + " about " + draw(BAD_THINGS) + when() }
	])();
}

function someones() {
	return draw(["my ","your ", "someone's ", "my " + draw(PEOPLE) + "'s "]);
}

function someoneActive() {
	return draw(["I", "my " + draw(PEOPLE)]);
}

function someonePassive() {
	return someones() + draw(PEOPLE);
}

function someoneWas() {
	return draw(["I was ", someones() + draw(PEOPLE) + " was "]);
}

function someoneElse() {
	return "my " + draw(PEOPLE);
}

function activity() {
	return draw([
		function() { return draw(ACTIVITIES) },
		function() { return draw(ACTIVITIES) + " with " + someoneElse() },
		function() { return draw(["avoiding " + someoneElse(), "avoiding the " + draw(PLACES_FOR_PEOPLE)]) },
	])();
}


function when() {
	return draw([
		function() { return "" },
		function() { return " " + draw(TIMES)},
		function() { return " while I was " + draw(ACTIVITIES)},
		function() { return " at the " + draw(PLACES_FOR_PEOPLE)},
		function() { return " while I was taking my " + draw(PEOPLE) + " to the " + draw(PLACES_FOR_PEOPLE)},
		function() { return ", so I spent too much time " + draw(ACTIVITIES)},
		function() { return " because " + generateReason() },
		function() { return " when " + generateReason() },
		function() { return " and then " + generateReason() }
	])();
}
