const INTROS = [
	"Sorry I'm late,",
  "Sorry for the delay,",
	"I know I'm late, but",
	"I apologize for being late,",
	"Sorry about the time,",
	"Sorry about this, but",
	"So sorry about this, but",
	"Sorry guys. It's kind of a long story,",
	"Sorry everyone. Crazy story,",
	"Sorry I'm late. You're not gonna believe this,",
	"Sorry about the time. Long story short,",
	"I'll be a bit late because",
	"I know this sounds crazy, but",
];

const INTRO_GLUE = [",", ". I'm really sorry about that, but", " because", ". It's kind of a long story,"]

const PEOPLE = ["wife", "husband", "brother", "kid", "grandma", "grandpa", "mother", "father", "friend", "girlfriend", "boyfriend", "imaginary friend", "dog", "cat", "hamster", "doctor", "chicken",
               "parole officer", "uncle", "aunt Karen"];

const PLACES_FOR_PEOPLE = ["doctor", "airport", "supermarket", "pharmacy", "hospital", "cemetary", "zoo", "school", "university", "divorce lawyer", "police", "restaurant", 
                           "B&uuml;rgeramt", "homeless shelter", "law school", "med school", "house", "apartment"];

const PLACES_TO_BE_ON = ["the internet", "reddit", "facebook", "tv", "national television", "the front page"];

const THINGS_THAT_BREAK = ["car", "computer", "laptop", "monitor", "mouse", "keyboard", "oven", "fridge", "VR headset", "body", "brain", "shoes", "Unity Editor", "Photoshop", "Excel", "bicycle", 
                           "motorcycle", "bicycle helmet", "motorcycle helmet", "bed", "chair", "table", "phone", "excuse generator", "internet", "router"];

const ACTIVITIES = ["driving", "sleeping", "on my way home", "doing groceries", "finishing my tasks", "working overtime", "being busy", "working hard", "going to the airport", 
                    "on the train", "swimming", "taking a shower", "feeding my cat", "feeding my dog", "on the phone", "binge drinking", "smoking weed", "faking statistics", 
                    "watering the plants", "playing video games", "planning", "drinking coffee", "doing drugs", "coming up with an excuse", "browsing reddit", "getting wasted",
                    "smoking a cigarette", "having a smoke", "getting some fresh air"];

const THINGS_TO_LOSE = ["glasses", "wallet", "sanity", "beer", "password", "money", "Facebook password", "Trello account", "keys", "inheritance", "claim to the throne", 
                        "trust", "shirt", "clothes", "underwear", "cocaine", "argument", "dignity", "excuse", "homework", "virginity", "custody hearing", "parole hearing", "trial"];

const THINGS_TO_CRASH = [
	"computer", "car", "bicycle", "motorcycle", "Unity", "Photoshop", "Playstation", "stock market portfolio"];

const EMOTIONS = [
	"angry", "sad", "depressed", "happy", "sick", "impatient", "annoyed", "excited", "bored", "lazy", "scared", 
	"anxious", "agitated", "wrong"];

const DESTROYED = ["lost", "crushed", "dropped", "burned", "broke", "forgot", "ate"];
const INJURED = ["cut", "crushed", "broke", "burned", "hurt", "tore", "sprained", "cut off", "shot", "severed", "touched"];

const TIMES = ["yesterday", "today", "last night", "the other day", "last year", "just now", "recently", "this morning"];

const BAD_THINGS = [
	"the gas prices", "death", "capitalism", "the heat death of the universe", "our project", "the future", "the past", 
	"politics", "my drug addiction", "my second marriage", "my lost youth", "all the lost opportunities", 
	"starving children", "last night", "all my past mistakes", "when I became old", "being late",
	"why I don't understand those kids anymore", "the stupidity of our species", "asteroid impacts", "supervolcanos", 
	"tsunamis", "global warming", "global extinction events", "pandemics", "the zombie apocalypse", "the Coronavirus",
	"all the stupid people", "the small things in life", "corrupt politicians", "copyright lawyers", 
	"conspiracy theories"];

const THINGS_YOU_DO_TO_PEOPLE = ["avoiding", "hiding from", "fighting with", "arguing with", "delayed by"];

const THINGS_YOU_DO_TO_PLACES = ["avoiding", "visiting", "running away from"];

const BODY_PARTS = [
	"genital", "heart", "eye", "hand", "foot", "hip", "lung", "brain", "finger", "toe", "testicle", "uterus", "ovary", 
	"lip", "tongue", "nose", "ear", "hair", "herpes", "back", "tummy", "belly button", "toe nail", "blood", "breast", "chest",
	"stomach", "anus"];

const PEOPLE_THAT_DO_THINGS_TO_BODY_PARTS = ["doctor", "surgeon", "photographer"];

const THINGS_THAT_HAPPEN_TO_BODY_PARTS = [
	"surgery", "infection", "exam", "massage", "transplantation", "virus"];

const THINGS_YOU_DO_AGAINST_SOMETHING = [
	"plotting", "scheming", "conspiring", "struggling", "fighting", "protesting"];

const OBSTACLES = ["construction", "protest", "demonstration", "party", "accident", "fire", "emergency", "explosion"];

const generateExcuse = (intro) =>
{
  if (intro === undefined || intro === null || intro.length == 0) {
	  intro = generateIntro();
  }
  else {
    intro = intro + draw(INTRO_GLUE);
  }  
  return intro + " " + generateReason() + ".";
}

function generateIntro()
{
	return draw(INTROS);
}

function _generateReason(){
	const r = generateReason();
	if (r.includes("there was")) {
		return r;
	}
	return _generateReason();
}

function generateReason()
{
	return draw([
    someoneWasDoingSomething,
		iHadToTakeXtoY,
    iHadToPickUpXfromY,
		iLostSomething,
		myXWasStolen,
		someonesEmotion,
		iWasBusy,
    iGotArrested,
    weather,
    thinkingAboutBadThings,
    iHadADream,
    someoneDidXatY,
    someoneWasWrong,
    iHadToTakeXToTheBodyPartPerson,
    someoneHadBodyPartSomething,
    iBrokeMyThing,
	iHadToDoSomethingWithABodyPart,
	someoneInjuredABodyPart,
	tooMuchActivity,
	iHadToRevenge,
	thereWasAnObstacle,
	iSpentTime,
	])();
}

function someoneDidXatY() {
  return someoneActive() + " was " + activity() + " at the " + draw(PLACES_FOR_PEOPLE) + when();
}

function iHadADream() {
	return "I had a really cool dream where " + someoneActive() + " was " + activity() + when();
}

function thinkingAboutBadThings() {
	return someoneWas() + draw(["thinking", "talking", "discussing with " + someoneElse(), "wondering", draw(EMOTIONS)]) + " about " + draw(BAD_THINGS);
}

function weather() {
	return draw(["it was raining", "the weather was so nice", "it was cloudy", "it was too cold outside", "it was too hot outside"]) + when();
}

function iGotArrested() {
	return draw([someoneActive() + " got ", "I almost got "]) + draw([
		() => "arrested for " + activity(),
		() => "arrested" + when(),
		() => "caught " + activity()
	])();
}
 
function iWasBusy() {
	return "I was busy " + activity();
}

function tooMuchActivity() {
	return "I was " + activity() + " too much";
}

function iHadToTakeXtoY() { 
	return "I had to take " + someonePassive() + " to the " + draw(PLACES_FOR_PEOPLE) + when(); 
}

function iHadToTakeXToTheBodyPartPerson() {
  return "I had to take " + someonePassive() + " to the " + draw(BODY_PARTS) + " " + draw(PEOPLE_THAT_DO_THINGS_TO_BODY_PARTS) + when();
}

function someoneHadBodyPartSomething() {
  return someoneActive() + " had " + a(draw(BODY_PARTS)) + " " + draw(THINGS_THAT_HAPPEN_TO_BODY_PARTS) + when();
}

function iBrokeMyThing() {
  return someoneActive() + " broke my " + draw(BODY_PARTS.concat(THINGS_THAT_BREAK)) + when();
}

function iHadToDoSomethingWithABodyPart() {
	const who = someoneActive();
	var whom = (who == "I" ? someoneOrMyself : someonePassive)();
	
	return who + " gave " + whom + " " + a(draw(BODY_PARTS)) + " " + draw(THINGS_THAT_HAPPEN_TO_BODY_PARTS) + when();
}

function someoneInjuredABodyPart() {
	return someoneActive() + " " + draw(INJURED) + " " + someones() + draw(BODY_PARTS) + when();
}

function iHadToRevenge() {
	return "I had to take revenge because " + someoneElse() + " was " + activity();
}

function iHadToPickUpXfromY() {
  return "I had to pick up " + someonePassive() + " from the " + draw(PLACES_FOR_PEOPLE) + when();
}

function iLostSomething() {
  return draw([
    () => someoneActive() + " lost my " + draw(THINGS_TO_LOSE) + when(),
    () => someoneActive() + " lost " + someones() + draw(THINGS_TO_LOSE) + when()
  ])();
}

function destroyedSomething() {
	return someoneActive() + " " + draw(DESTROYED) + someones() + draw(THINGS_THAT_BREAK) + when();
}

function myXWasStolen() {
	return someoneElse() + " stole " + someones() + draw(THINGS_TO_LOSE.concat(THINGS_THAT_BREAK).concat(PEOPLE)) + when();
}

function thereWasAnObstacle() {
	return "there was " + a(draw(OBSTACLES)) + draw([" at the ", " at my "]) + draw(PLACES_FOR_PEOPLE) + when();
}

function iSpentTime() {
	return draw([
			"I spent too much time ", 
			"I spent a lot of time ",
		])
		+ draw([
			() => draw(ACTIVITIES),
			() => "on " + draw(PLACES_TO_BE_ON),
			() => "at the " + draw(PLACES_FOR_PEOPLE),
		])();
}

function someoneWasDoingSomething() {
	return someoneWas() + activity() + when();
}

function someoneWasWrong() {
  return someoneWas() + "wrong" + draw([
    () => " on " + draw(PLACES_TO_BE_ON) + when(),
    () => " at the " + draw(PLACES_FOR_PEOPLE) + when()
  ])();
}

function someonesEmotion() {
	return draw([
    () => someoneActive() + " was " + draw(EMOTIONS) + when(),
    () => someoneActive() + " was " + draw(EMOTIONS) + " about " + draw(BAD_THINGS) + when()
  ])();
}

function someones() {
	return draw([
    () => draw(["my ","your ", "someone's "]), 
    () => "my " + draw(PEOPLE) + "'s "
  ])();
}

function someoneOrMyself() {
	return draw([
		() => "myself",
		someoneElse
	])();
}

function someoneActive() {
	return draw([
    () => "I", 
    () => "my " + draw(PEOPLE)
  ])();
}

function someonePassive() {
	return someones() + draw(PEOPLE);
}

function someoneWas() {
	return draw([
    () => "I was ", 
    () => someones() + draw(PEOPLE) + " was "
  ])();
}

function someoneElse() {
	return "my " + draw(PEOPLE);
}

function activity() {
	const againstWho = draw([
		() => "the " + draw(PLACES_FOR_PEOPLE),
		() => someonePassive(),
		() => draw(BAD_THINGS),
	]);	
	
	return draw([
		() => draw(ACTIVITIES),
		() => draw(ACTIVITIES) + " with " + someoneElse(),
		() => draw([draw(THINGS_YOU_DO_TO_PEOPLE) + " " + someoneElse(), draw(THINGS_YOU_DO_TO_PLACES) + " the " + draw(PLACES_FOR_PEOPLE)]),
		() => draw(THINGS_YOU_DO_AGAINST_SOMETHING) + " " + draw(["against", "with"]) + " " + againstWho(),
	])();
}


function when() {
	return draw([
		function() { return "" },
		function() { return "" },
		function() { return "" },
		function() { return "" },
		function() { return "" },
		function() { return "" },
		function() { return " " + draw(TIMES)},
		function() { return ", so " + generateReason() },
		function() { return " because " + generateReason() },
		function() { return " when " + generateReason() },
		function() { return " and then " + generateReason() },
	])();
}


function a(word) {
  if ("aeio".includes(word[0])) {
    return "an " + word;
  }
  return "a " + word;
}