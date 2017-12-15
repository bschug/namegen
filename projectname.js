var projectPrefixes = [
	'Fire', 'Earth', 'Bit', 'Byte', 'Mega', 'Giga', 'Ultra', 'Super', 'Awesome', 'Amazing', 'Hover', 'Incredible',
    'Static', 'Dynamic', 'Mini', 'Over', 'Weird', 'Dependency', 'Developer', 'Search', 'Data', 'Negative', 'Manual',
    'Automatic', 'Hyper', 'Empty', 'Complex', 'Infinite'];
var projectSuffixes = [
	'Accelerator', 'Incubator', 'Lake', 'Dome', 'Velocity', 'One', '2000', '42', 'Fox', 'Hound', 'Llama', 'Dog', 'Cat',
    'Ferret', 'Weasel', 'Panda', 'Raptor', 'Disruptor', 'Battleground', 'Clean', 'Forge', 'Drive', 'Way', 'Argument',
    'Plus', 'Minus', 'Mindset', 'Stuff'];
var projectAny = [
	'Fort', 'Particle', 'Laser', 'Dinosaur', 'Knowledge', 'Wisdom', 'Portal', 'Storm', 'Sky', 'Thunder', 'Coin',
    'Innovation', 'Persistence', 'Attack', 'Speed', 'Lightning', 'Spark', 'Formula', 'Red', 'Green', 'Black', 'White',
    'Blue', 'Orphan', 'Doctor', 'Love', 'Secret', 'Bug', 'Spider', 'Space', 'Cookie', 'Blade', 'Frost', 'Golf',
    'Sniper', 'Sonic', 'Baby', 'Zoom', 'Buzzword', 'Radar', 'Dark', 'Whale', 'Learning', 'Machine', 'Monkey', 'Key',
    'Monitor', 'Background', 'Word', 'Science', 'City', 'Hype', 'Bullshit', 'Physics', 'Vortex', 'Tech', 'Future',
    'Galaxy', 'Python', 'Infinity'];


function randomName() {
    var prefix = null;
    var suffix = null;
    while (prefix === suffix) {
        prefix = draw(projectPrefixes.concat(projectAny));
        suffix = draw(projectSuffixes.concat(projectAny));
    }
    return prefix + " " + suffix;
}

function getNumberOfCombinations() {
    return combinationsForPrefixCount(projectPrefixes, projectSuffixes, projectAny, 1);
}