var firstnamePrefixes = [
    "an", "bar", "ben", "ber",
    "ca", "char", "chris", "deb", "don", "doro",
    "ed", "el", "ga", "ge", "hel",
    "ja", "jan", "jay", "je", "jen", "jess", "jo",
    "ka", "ke", "ken", "lar", "lau", "lin",
    "ma", "mar", "max",
    "nan", "pan",
    "ro", "sa", "san", "sha", "ste", "su",
    "theo", "tho", "timo",
    "vic", "xan" ];
var firstnameSuffixes = [
	"bara", "beth", "bert", "bin", "bold", "by", "cy",
    "der", "dra", "dora",
    "en", "era", "fred", "frida",
	"gard", "gret", "grid",
	"fina", "fine", "iam", "ica", "ifer", "ine",
    "la", "lios", "lotte",
	"man", "mas", "na", "nald", "nard", "neth", "nie", "ny",
    "ra", "ren", "ria", "ric", "ron", "rol", "ry",
	"san", "seph", "son",
    "thea", "theus", "thro", "thy", "tina", "tine", "toph", "topher", "ton", "tony", "tra", "trus",
    "vid", "ven", "ward", "well", "win", "wina", "der", "ya" ];
var firstnameAny = [
	"carl", "da", "min", "pe", "ron", "ter", "tor", "will",
	"wolf"];

var firstnamePrefixCounts = [
	new WeightedValue(1, 100),
	new WeightedValue(2, 25)
]

var conjections = [
	new WeightedValue(" ", 100),
	new WeightedValue(" of ", 5)
];

var lastnamePrefixes = [
    "big", "black", "breeding", "brown", "burly", "burn",
    "crooked", "cuddle", "curly",
    "dark", "double", "drink", "dwarven",
    "earth",
    "fast", "feeding", "fine",
    "golden",
    "happy", "hard", "high", "hot", "humming", "hunting",
    "leading", "lucky",
    "mac", "mad", "mocking",
    "old", "over",
    "proud",
    "quick",
    "rich", "roll", "round",
    "silvery", "small", "soft", "spider", "stark", "swift",
    "tall", "throwing", "tiny",
    "über", "un", "under",
    "wiggle", "wooly"
];
var lastnameSuffixes = [
    "balls", "bearer", "bells", "belly", "blaze", "breast", "breed", "butcher",
    "climber", "crank",
    "down", "drinker", "dwarf",
    "face", "feet", "foe", "food", "fiend", "friend",
    "hunter",
    "ikowsky",
    "jester", "joker", "joy", "judge",
    "leader", "leaf", "less", "lich", "luck", "ly",
    "menace",
    "ness",
    "pony",
    "realm", "ride", "rise",
    "shoe", "smith", "spinner", "strength", "swift",
    "ton", "toss",
    "wife", "woman"
];
var lastnameAny = [
    "arm",
    "back", "ball", "barrel", "bass", "bear", "beard", "bed", "beer", "bell", "bird", "blood", "boy", "brood", "bunny",
    "chicken", "child", "claw", "con", "cow", "crow",
    "dagger", "devil", "dog", "dork", "drop",
    "fire", "flesh", "foot", "forest", "fox", "fraud", "frog",
    "giant", "girl", "gold", "greed",
    "hammer", "hand", "head", "heart", "hill", "horse", "house", "hut",
    "jaw",
    "king",
    "land", "lead", "leather", "lust",
    "man", "meat", "milk", "mood", "mountain", "mouse", "mouth",
    "neck", "nest", "noose",
    "paw", "pig", "ploy", "power", "pride", "prince",
    "rage", "rascal", "rock", "rogue", "ruse", "rush",
    "scare", "sheep", "silver", "smurf", "snake", "snow", "sow", "spark", "spring", "star", "stone", "storm", "strong", "sun", "sword", 
    "time", "tower", "tooth", "tree", "trick",
    "viper",
    "water", "weasel", "whisper", "wild", "wind", "wolf", "wood", "word", "wrath"
];

var lastnamePrefixCounts = [
	new WeightedValue(1, 100),
	new WeightedValue(2, 20)
];

var COMPOSITE_LASTNAME_CHANCE = 0;
