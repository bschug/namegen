var firstnamePrefixes = [
	"adel", "anne", "bar", "bertels", "chris", "elisa",
	"glücks", "gott", "gram", "groß",
	"inge", "irm", "klein", "man", "mett", "nor", "nar", "mar", "pu"];
var firstnameSuffixes = [
	"bara", "beth", "bette", "bold", "dred", "era", "fred", "frieda",
	"gang", "gard", "garst", "gret", "grid",
	"-Heinz", "hold", "horst", "heid", "fina", "finchen", "fine", "lotte",
	"mann", "marie", "minza", "mette", "rich", "rieke",
	"sohn", "tina", "tine", "wittchen", "var"];
var firstnameAny = [
	"bert", "borg", "fried", "friede", "hans", "hänsel", "hilde",
	"josef", "karl", "max", "muckel", "peter", "toffel", "tor",
	"wenzel", "wolf", "wurst"];

var firstnamePrefixCounts = [
	new WeightedValue(1, 100),
	new WeightedValue(2, 5)
]

var conjections = [
	new WeightedValue(" ", 100),
	new WeightedValue(" von ", 5)
];

var lastnamePrefixes = [
	"alt", "bären", "braun", "brumm", "butzel", "doppel", "dunkel", "erd", 
	"frauen", "fein", "funken",
	"glücks", "groß", "hart", "hasen", "heiß", "hinter", "hoch", "hunds",
	"klein", "königs", "kröten", "krumm", "kuschel", "manns", "pfoten", "pranken", "prinzen", "roll", "rund",
	"sauf", "schlangen", "schlängel", "schnell", "schweins",
"schwarz", "sonnen", "spinnen", "stramm",
	"teufels", "trink",
	"über", "un", "unter", "weibs", "weich", "woll", "wolfs"];
var lastnameSuffixes = [
	"bär", "bauch", "blatt", "brand", "brust", "brunst",
	"feind", "fleischer", "flink", "fratze", "frau", "freude", "freund", "funke", "gartner", "glück", "haft", "hase", "heber", "hund", 
	"ikowski", "kind", "könig", "kröte", "lich", "los", "mann", "meier", "milch",
	"pfote", "pranke", "prinz", "quell", "richter", "riese",
	"säufer", "schenk", "schlange", "schrat", "schuh", "schwein",
    "steiger", "sucht", "sonne", "spinner",
	"teufel", "träger", "weib", "wolf", "zwerg" ];
var lastnameAny = [
	"arm", "bart", "bass", "baum", "berg", "bett", "bier", "brut", "blut", 
	"dackel", "dödel",
	"fass", "feuer", "fleisch", "fuchs", "führer", "fuß",
	"gier", "gold", 
	"hammer", "hand", "haupt", "haus", "herz", "hoden", "holz", "huhn", "jäger",
	"klöten", "kopf", "kraft", "leder", "list", "lust", 
	"maul", "maus", "mund", "nest", "nacken",
	"rauch", "reich", "rödel",
	"sau", "schaf", "schelm", "schlingel", "schlumpf", "schnee", "schreck", "stein",
	"stolz", "silber", "stark", "stern", "strick", "sturm", "trick",
	"wahn", "wasser", "wald", "wiesel", "wild", "wind", "wort", "wurf", "wurst", "wut", "zahn", "zorn"
];

var lastnamePrefixCounts = [
	new WeightedValue(1, 100),
	new WeightedValue(2, 20)
];

var COMPOSITE_LASTNAME_CHANCE = 0;
