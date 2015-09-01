var firstnamePrefixes = [
	"adel", "anne", "bar", "bertels", "chris", "elisa",
	"glücks", "gott", "gram", "groß",
	"inge", "irm", "klein", "mett", "nor", "nar", "mar", "pu"];
var firstnameSuffixes = [
	"bara", "beth", "bold", "era", "fred", "frieda",
	"gang", "gard", "garst", "gret", "grid",
	"-Heinz", "hold", "horst", "heid", "fina", "finchen", "fine", "lotte",
	"mann", "marie", "minza", "mette", "rich", "rieke",
	"sohn", "tina", "tine", "wittchen", "var"];
var firstnameAny = [
	"bert", "borg", "fried", "friede", "hans", "hänsel", "hilde",
	"josef", "karl", "max", "muckel", "peter", "toffel", "tor",
	"wolf", "wurst"];

var firstnamePrefixCounts = [
	new WeightedValue(1, 100),
	new WeightedValue(2, 5)
]

var conjections = [
	new WeightedValue(" ", 100),
	new WeightedValue(" von ", 5)
];

var lastnamePrefixes = [
	"alt", "bären", "braun", "brumm", "butzel", "doppel", "dunkel", "erd", "frauen", "fein", "funken",
	"glücks", "groß", "hart", "hasen", "heiß", "hinter", "hoch", "hunds",
	"klein", "königs", "kröten", "krumm", "kuschel", "manns", "pfoten", "pranken", "prinzen", "roll", "rund",
	"sauf", "schlangen", "schlängel", "schnell", "schweins",
"schwarz", "sonnen", "spinnen", "stramm",
	"teufels", "trink",
	"über", "un", "unter", "weibs", "weich", "woll", "wolfs"];
var lastnameSuffixes = [
	"bär", "bauch", "blatt", "brand", "brust", "brunst",
	"feind", "fleischer", "flink", "fratze", "frau", "freude", "freund", "funke", "glück",
	"haft", "hase", "hund", "ikowski", "kind", "könig", "kröte", "lich", "los", "mann", "meier", "milch",
	"pfote", "pranke", "prinz", "quell", "richter", "riese",
	"säufer", "schenk", "schlange", "schrat", "schuh", "schwein",
"steiger", "sucht", "sonne", "spinner",
	"teufel", "träger", "weib", "wolf", "zwerg" ];
var lastnameAny = [
	"arm", "bart", "bass", "baum", "berg", "bett", "bier", "brut", "blut", "dackel", "dödel",
	"fass", "feuer", "fleisch", "fuchs", "führer", "fuß",
	"gier", "gold", "hammer", "hand", "haus", "herz", "hoden", "holz", "huhn", "jäger",
	"klöten", "kopf", "kraft", "leder", "list", "lust", "maul", "maus", "mund", "nest", "nacken",
	"rauch", "reich", "rödel",
	"sau", "schaf", "schelm", "schlingel", "schlumpf", "schnee", "schreck", "stein",
	"stolz", "silber", "stark", "stern", "strick", "sturm", "trick",
	"wahn", "wasser", "wald", "wiesel", "wild", "wind", "wort", "wurf", "wurst", "wut", "zahn", "zorn"
];

var lastnamePrefixCounts = [
	new WeightedValue(1, 100),
	new WeightedValue(2, 20)
];

var COMPOSITE_LASTNAME_CHANCE = 0; // disabled for now



function findStringNotAlreadyUsed(used, candidates) {
	var result = draw(candidates);
	if (containsIgnoreCase(used, result)) {
		return findStringNotAlreadyUsed(used, candidates);
	}
	else {
		return result;
	}
}

function buildNameFromLists(prefixes, suffixes, any, numPrefixes) {
	var components = [];
	for (var i=0; i < numPrefixes; i++) {
		components.push(findStringNotAlreadyUsed(components, prefixes.concat(any)));
	}
	components.push(findStringNotAlreadyUsed(components, suffixes.concat(any)));
	return capitalize(components.join(""));
}

function randomFirstname() {
	var numPrefixes = drawWeighted(firstnamePrefixCounts);
	return buildNameFromLists(firstnamePrefixes, firstnameSuffixes, firstnameAny, numPrefixes);
}

function randomSimpleLastname() {
	var numPrefixes = drawWeighted(lastnamePrefixCounts);
	return buildNameFromLists(lastnamePrefixes, lastnameSuffixes, lastnameAny, numPrefixes);
}

// Not used right now, composite lastnames seem too long to be funny.
// Set COMPOSITE_LASTNAME_CHANCE to a value > 0 to enable it.
function randomCompositeLastname() {
	var name1 = randomSimpleLastname();
	var name2 = randomSimpleLastname();
	while (name1 === name2) {
		name2 = randomSimpleLastname();
	}
	return name1 + "-" + name2;
}

function randomLastname() {
	return randomBool(COMPOSITE_LASTNAME_CHANCE) ? randomCompositeLastname() : randomSimpleLastname();
}

function randomName() {
	return randomFirstname() + drawWeighted(conjections) + randomLastname();
}

function getNumberOfCombinations() {
	var firstnameCombinations = 0;
	for (var i=0; i < firstnamePrefixCounts.length; i++) {
		firstnameCombinations += combinationsForPrefixCount(
			firstnamePrefixes, firstnameSuffixes, firstnameAny, firstnamePrefixCounts[i].value);
	}

	var lastnameCombinations = 0;
	for (var i=0; i < lastnamePrefixCounts.length; i++) {
		lastnameCombinations += combinationsForPrefixCount(
			lastnamePrefixes, lastnameSuffixes, lastnameAny, lastnamePrefixCounts[i].value);
	}

	// composite lastnames are disabled for now
	return firstnameCombinations * conjections.length * lastnameCombinations ;
	//	 + firstnameCombinations * conjections.length * lastnameCombinations * (lastnameCombinations - 1);
}

function combinationsForPrefixCount(prefixes, suffixes, any, numPrefixes) {
	var p = prefixes.length;
	var s = suffixes.length;
	var a = any.length;
	var np = numPrefixes;

	return s * fallingFactorial(p+a, np)
		 + a * fallingFactorial(p+a-1, np);
}
