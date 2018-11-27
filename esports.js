var Both = [
    "Fish",
    "Planet", "Star", "Grammar", "Sun", "Chaos", "Power", "Magic", "Blood", "Moon",
    "Death", "Hell", "War", "Soul", "Night", "Hate", "Evil", "Kill", "Fire", "Storm", "Winter",
    "Shadow", "Pain", "Dream", "Acid", "Flesh", "Terror", "Ritual", "Frost", "Doom", "Wind",
    "Metal", "Gold", "Lead", "Platinum", "Silver", "Silicon", "Stone", "Steel", "Iron",
    "Cake", "Cookie","Murder", "Illuminati", "Skull", "Skill", "Anger", "Youth", "Temple",
    "Five", "Gang", "Code", "Core", "Hype", "Cheese",
    "Pro"    
];
var Prefix = [
    "Tiger", "Bull", "Llama", "Bear", "Monkey", "Dino", "Raptor", "Goat", "Raven", "Dragon", "Mouse",
    "Lucky", "Happy", "Royal", "Cheesy", "Fine", "Finest", "Fastest", "Invincible", "Invisible", "United", "Incredible", "Awesome",
    "Sleepy", "Raging", "Calm", "Molten", "Easy", "Delicious", "Hungry", "Strong", "Fallen", "Flaming", "Always", "Never",
    "Born", "Greatest", "Super", "Lying", "True", "Smiling", "Shiny", "Immortal", "Forsaken", "Omnipotent", "Omniscient",
    "Divine", "Infernal", "Abyssal", "Breaking", "Broken", "Dead", "Human", "Eternal", "Beyond", "Lost", "Grim", "Spirit",
    "Red", "Green", "Blue", "Yellow", "Pink", "Black", "White", "Verdant", "Dark", "Bright", "Light", "Ashen", "Toxic",
    "Noob", "Monster", "OMG", "Twitch", "Hashtag", "Necro", "Witch", "Cold", "Brutal", "Ancient", "Modern", "Valiant",
    "Quantum", "Meta", "Random", "Paper", "Burning", "Rolling", "Wise", "Smart", "Witty", "Simple", "Elaborate", "Flame",
    "Sometimes", "Forever", "Mister", "Burning Hot", "OP", "Official", "Unofficial", "Imperial", "National", "International",
    "Excessive", "Massive", "Free", "Freedom", "Silent", "Roaring", "Legendary", "Legitimate", "Cute", "Healthy", "Lifting",
    "Sword", "Axe", "Gun", "Bullet", "Razor", "Natural", "Organic", "Robotic", "Artificial", "Superhuman", "Holy", "Unholy",
     "Pizza", "Runtime", "Gank", "Nerd", "Champion", "Master", "Hollow",
    "Guild of", "Nation of", "Family of", "Cult of", "Rite of", "Legend of", "Gang of", "Mother of all", "All the", "Against the",
    "Knights of", "Sacrifice of", "To the", "Shooting for the", "Law of", "Your Mom's", "Born in", "Hiding in", "Hiding from", 
    "Pursuing the", "Pursuit of", "Follow the", "Running with", "Running from",
];
var Suffix = [
    "Pigs", "Panthers", "Tigers", "Bulls", "Horses", "Llamas", "Bears", "Monkeys", "Dinos", "Raptors", "Goats", "Wolves",
    "Ravens", "Dragons",
    "Stars", "Lies", "Truth", "Smiles", "Eyes", "Eyeballs", "Gems", "Abyss", "Quests", "Flames", "Hearts", "Jackpot",
    "Food", "Drinks",
    "Swarm", "Pack", "Gathering", "Guild", "Friends", "Family", "Union", "Nation", "Cult", "Cartel",
    "Noobs", "Sports", "Esports", "Strats", "Monsters", "Demons", "Skulls", "Skills", "Gaming", "Wings", "GG", "TV", "Builds",
    "Eaters", "Drinkers", "Killers", "Monks", "Cowboys", "Rangers", "Knights", "Harbingers", "Masters", "Gods", "Kings",
    "Lords", "Witches", "Ones", "Faces", "Artists", "Wizards", "Acrobats", "Hunters", "Gunslingers", "Men", "Heads",
    "Duelists", "Shadows", "Dancers", "Bros", "Nerds", "Doctors", "Champions", "Masters", "Athletes", "Grannies",
    "Swords", "Axes", "Guns", "Arms", "Bullets", "Fist", "Fists", "Razors", "Claws",
    "Fall", "Force", "Fear", "Thrones", "Torment", "Gates", "Dawn", "Spirits", "Forest", "Slaughters", "Wrath", "Heaven",
    "Noise", "Music", "Songs", "Burns", "Sources", "Sacrifices", "is Real",
    "Plus", "Laws", "Moms", "Mothers"
];

var Vowels = "aeiouAEIOU";

function Generate (maxLength) {
    for ( var attempt = 0; attempt < 100; attempt++ ) {
        var result = TryGenerate();
        if ( result != null && result.Name.length <= maxLength ) {
            return result;
        }
    }
    return { Name: "Cheesy Strats", Tag: "CHS" };
}

function TryGenerate () {
    if ( randomBool( 0.5 ) ) {
        return TryGenerateThreeWordName();
    }
    return TryGenerateTwoWordName();
}

function TryGenerateThreeWordName () {
    var prefixes = Prefix.concat(Both);
    var suffixes = Suffix.concat(Both);

    var first = draw(Prefix);
    var middle = draw(prefixes);
    var last = draw(suffixes);

    if ( SoundsStupid( first, middle, last ) ) {
        return null;
    }

    return {
        Name: BuildName( first, middle, last ),
        Tag: GetTag( first, middle, last )
    };
}

function TryGenerateTwoWordName () {
    var prefixes = Prefix.concat( Both );
    var suffixes = Suffix.concat( Both );

    var first = draw(prefixes);
    var last = draw(suffixes);

    if ( SoundsStupid( first, last ) ) {
        return null;
    }
    return {
        Name: BuildName( first, last ),
        Tag: GetTag( first, last )
    };
}

function SoundsStupid (first, middle, last) {
    if (last === undefined) {
        return SoundsStupid2( first, middle );
    }
    return SoundsStupid3( first, middle, last );
}

function SoundsStupid2 (first, last) {
    if (first.includes(last) || last.includes( first ) ) {
        return true;
    }
    if ((first.endsWith(" the") || first.endsWith(" of") || first.endsWith(" all") || first.endsWith(" from") || first.endsWith(" with")) && (last.startsWith("is " ))) {
        return true;
    }
    return false;
}

function SoundsStupid3(first, middle, last) {
    if (SoundsStupid2( middle, last ) ) {
        return true;
    }
    if (SoundsStupid2( first, middle ) ) {
        return true;
    }
    if (first.endsWith(" of") && middle.endsWith(" of" ) ) {
        return true;
    }
    return false;
}

function BuildName (first, middle, last) {
    if (last === undefined) {
        return first + " " + middle;
    }
    return first + " " + middle + " " + last;
}

function GetTag (first, middle, last) {
    if (last === undefined) {
        return GetTag2( first, middle );
    }
    return GetTag3( first, middle, last );
}

function GetTag2 (first, last) {
    var pf = GetTagComponent( first );
    var sf = GetTagComponent( last );

    if ( pf.length + sf.length <= 3 ) {
        return pf + sf;
    }

    if ( Vowels.includes( last[0] ) ) {
        return pf[0] + sf;
    }
    return pf + sf[0];
}

function GetTag3 (first, middle, last) {
    return GetTagComponent( first )[0] + GetTagComponent( middle )[0] + GetTagComponent( last )[0];
}

function GetTagComponent (word) {
    switch ( word ) {
        case "Hashtag":
            return "#";
        case "Five":
            return "5";
        case "Plus":
            return "+";
        case "Law":
        case "Law of":
            return "§";
        case "Superhuman":
            return "SH";
        case "To the":
            return ">>";
        case "Burning Hot":
            return "BH";
        case "Your Mom's":
            return "YM";
        default:
            break;
    }

    if ( word.endsWith( " of" ) ) {
        return word[0] + "o";
    }
    if ( word.startsWith( "Ex" ) ) {
        return "X";
    }

    return word.substring( 0, 2 ).toUpperCase();
}