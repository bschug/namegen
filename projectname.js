var projectPrefixes = [
	'Fire', 'Earth', 'Bit', 'Byte', 'Mega', 'Giga', 'Ultra', 'Super', 'Awesome', 'Amazing', 'Hover', 'Incredible',
    'Static', 'Dynamic', 'Mini', 'Over', 'Weird', 'Dependency', 'Developer', 'Search', 'Data', 'Negative', 'Manual',
    'Automatic', 'Hyper', 'Empty', 'Complex', 'Infinite', 'Golden', 'Platinum', 'Caring', 'Loving', 'Cooperative',
    'Adverarial', 'Recurrent', 'Autonomous', 'Artificial', 'Neural', 'Genetic', 'Charged', 'Overcharged',
    'Impatient', 'Patient', 'Greedy', 'Optimal', 'Temporal', 'Silent', 'Lean', 'Smart', 'Vital', 'Graceful',
    'Electronic', 'Positronic', 'Temporary', 'Provisional', 'Makeshift', 'Viral'];
var projectSuffixes = [
	'Accelerator', 'Incubator', 'Lake', 'Dome', 'Velocity', 'One', '2000', '42', 'Fox', 'Hound', 'Llama', 'Dog', 'Cat',
    'Ferret', 'Weasel', 'Panda', 'Raptor', 'Disruptor', 'Battleground', 'Clean', 'Forge', 'Drive', 'Way', 'Argument',
    'Plus', 'Minus', 'Mindset', 'Stuff', 'Pact', 'Call', 'Sketch', 'Blueprint'];
var projectAny = [
	'Fort', 'Particle', 'Laser', 'Dinosaur', 'Knowledge', 'Wisdom', 'Portal', 'Storm', 'Sky', 'Thunder', 'Coin',
    'Innovation', 'Persistence', 'Attack', 'Speed', 'Lightning', 'Spark', 'Formula', 'Red', 'Green', 'Black', 'White',
    'Blue', 'Orphan', 'Doctor', 'Love', 'Secret', 'Bug', 'Spider', 'Space', 'Cookie', 'Blade', 'Frost', 'Golf',
    'Sniper', 'Sonic', 'Zoom', 'Buzzword', 'Radar', 'Dark', 'Whale', 'Learning', 'Machine', 'Monkey', 'Key',
    'Monitor', 'Background', 'Word', 'Science', 'City', 'Hype', 'Bullshit', 'Physics', 'Vortex', 'Tech', 'Future',
    'Galaxy', 'Python', 'Infinity', 'Gypsy', 'Danger', 'Dart', 'Nova', 'Slam', 'Dash', 'Goal', 'Chrome', 'Metal',
    'Cupcake', 'Donut', 'Eclair', 'Froyo', 'Gingerbread', 'Honeycomb', 'Ice Cream', 'Sandwich', 'Jelly Bean',
    'KitKat', 'Lollipop', 'Marshmallow', 'Nougat', 'Oreo', 'Mother', 'Whetstone', 'Briar', 'Riptide', 'Teleport',
    'Strike', 'Team', 'Community', 'Reinforcement', 'Network', 'Brain', 'Evolution', 'Viper', 'Assassin', 'Arrow',
    'Clarity', 'Bear', 'Data', 'Database', 'Placeholder', 'Patch', 'Spirit', 'Cascade', 'Tornado'];


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