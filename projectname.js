var projectPrefixes = [
	'Bit', 'Byte', 'Mega', 'Giga', 'Ultra', 'Super', 'Awesome', 'Amazing', 'Hover', 'Incredible',
    'Static', 'Dynamic', 'Mini', 'Over', 'Weird', 'Dependency', 'Developer', 'Search', 'Data', 'Negative', 'Manual',
    'Automatic', 'Hyper', 'Empty', 'Complex', 'Infinite', 'Golden', 'Platinum', 'Caring', 'Loving', 'Cooperative',
    'Adversarial', 'Recurrent', 'Autonomous', 'Artificial', 'Neural', 'Genetic', 'Charged', 'Overcharged', 'Final',
    'Impatient', 'Patient', 'Greedy', 'Optimal', 'Temporal', 'Silent', 'Lean', 'Smart', 'Vital', 'Graceful',
    'Electronic', 'Positronic', 'Temporary', 'Provisional', 'Makeshift', 'Viral', 'Decision', 'Broken', 'Unfinished',
    'Unbreakable', 'Secure', 'Connected', 'Interconnected', 'Interleaved', 'Democratic', 'Silk', 'Inhibited', 'Like',
    'Social', 'Twitter', 'Instagram', 'Facebook', 'Reddit', 'Air', 'Apple', 'Google', 'Microsoft', 'Van Gogh',
    'Rembrandt', 'Da Vinci', 'Transient', 'Intelligent', 'Big', 'Massive', 'Enormous', 'Giant', 'Extreme', 'Predictive',
    'Omniscient', 'Natural', 'Unstructured', 'Structured', 'Unsupervised', 'Supervised', 'Pre-trained', 'Big Data',
    'Deep', 'Theoretical', 'Applied', 'Business', 'Encrypted', 'Crypto', 'Assosciative', 'Esports', 'Automotive',
    'Medical', 'Random', 'B2B', 'Clean', 'Meme', 'Swipe', 'Anonymous', 'Tor', 'Web', 'Responsive', 'Responsible',
    'Generative', 'Cyber', 'Airport', 'Human'];
var projectSuffixes = [
	'Accelerator', 'Incubator', 'Lake', 'Dome', 'Velocity', 'One', '2000', '42', 'Fox', 'Llama', 'Dog', 'Cat',
    'Panda', 'Raptor', 'Disruptor', 'Battleground', 'Forge', 'Drive', 'Way', 'Argument',
    'Plus', 'Minus', 'Mindset', 'Stuff', 'Pact', 'Call', 'Sketch', 'Blueprint', 'Cascade', 'Solution', '++',
    'Inhibitor', 'Butler', 'Agent', 'Analytics', 'Warehouse', 'Nugget', 'Decoder', 'Encoder', 'Generator',
    'Reasoning', 'Platform', 'Mining', 'Interface'];
var projectAny = [
	'Fort', 'Particle', 'Laser', 'Dinosaur', 'Knowledge', 'Wisdom', 'Portal', 'Storm', 'Sky', 'Thunder', 'Coin',
    'Innovation', 'Persistence', 'Attack', 'Speed', 'Lightning', 'Spark', 'Formula', 'Red', 'Green', 'Black', 'White',
    'Blue', 'Orphan', 'Doctor', 'Love', 'Secret', 'Bug', 'Spider', 'Space', 'Cookie', 'Blade', 'Frost', 'Golf',
    'Sniper', 'Buzzword', 'Radar', 'Dark', 'Whale', 'Learning', 'Machine', 'Monkey', 'Key',
    'Monitor', 'Background', 'Word', 'Science', 'City', 'Hype', 'Bullshit', 'Physics', 'Vortex', 'Tech', 'Future',
    'Galaxy', 'Python', 'Infinity', 'Gypsy', 'Danger', 'Dart', 'Slam', 'Dash', 'Goal', 'Chrome', 'Metal',
    'Cupcake', 'Donut', 'Eclair', 'Froyo', 'Gingerbread', 'Honeycomb', 'Ice Cream', 'Sandwich', 'Jelly Bean',
    'KitKat', 'Lollipop', 'Marshmallow', 'Nougat', 'Oreo', 'Mother', 'Whetstone', 'Riptide', 'Teleport',
    'Strike', 'Team', 'Community', 'Reinforcement', 'Network', 'Brain', 'Evolution', 'Viper', 'Assassin', 'Arrow',
    'Clarity', 'Bear', 'Data', 'Database', 'Placeholder', 'Patch', 'Spirit', 'Tornado', 'Question', 'Graph', 'Tree',
    'Forest', 'Fire', 'Earth', 'Underground', 'Locker', 'Socket', 'Domain', 'Democracy', 'Socrates', 'Pythagoras',
    'Sharp', 'Shard', 'Mirror', 'Rabbit', 'Net', 'Road', 'Ability', 'Minion', 'Server', 'Venture', 'Share', 'Time',
    'Image', 'Picture', 'Painting', 'Code', 'Source', 'Language', 'Processing', 'Process', 'Wiki', 'Intelligence',
    'Modeling', 'Oracle', 'Privacy', 'Cloud', 'Theory', 'Encryption', 'Currency', 'Assistant', 'Payment',
    'Acknowledgement', 'Marketing', 'Sharing', 'Input', 'Security', 'Highway', 'Drone'];


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