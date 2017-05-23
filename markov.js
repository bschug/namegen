var MarkovChain = function(samples, prefixLength) {
	this.prefixLength = prefixLength;
	this.states = {}

	// Add all the samples
	for (var i=0; i < samples.length; i++) {
		var sample = samples[i];
		this.addSample(sample);
	}

	this.finalize();
}

MarkovChain.prototype.addSample = function(sample) {
	if (sample.length < this.prefixLength) {
		this.addTuple("^", sample);
		this.addTuple("^" + sample, "$");
		return;
	}

	// Mark beginning with ^
	this.addTuple("^", sample.substring(0, this.prefixLength));

	for (var i=0; i < sample.length - this.prefixLength; i++) {
		this.addTuple(sample.substring(i, i+this.prefixLength), sample[i+this.prefixLength]);
	}

	// Mark end with $
	this.addTuple(sample.substring(sample.length - this.prefixLength, sample.length), "$");
}

MarkovChain.prototype.addTuple = function(prefix, followup) {
	if (!(prefix in this.states)) {
		this.states[prefix] = {};
	}
	if (!(followup in this.states[prefix])) {
		this.states[prefix][followup] = 0
	}
	this.states[prefix][followup] += 1;
}

// Convert the per-prefix dictionaries to WeightedValue lists
MarkovChain.prototype.finalize = function() {
	for (prefix in this.states) {
		var followups = this.states[prefix];
		var weightedList = []
		for (var value in followups) {
			var weight = followups[value];
			weightedList.push(new WeightedValue(value, weight));
		}
		this.states[prefix] = weightedList;
	}
}

MarkovChain.prototype.generate = function() {
	var result = "^";
	while (true) {
		var state = result.substring(result.length - this.prefixLength, result.length);
		var followup = this.draw(state);
		if (followup == '$') {
			return result.substring(1, result.length);
		}
		result = result + followup;
	}
}

MarkovChain.prototype.draw = function(prefix) {
	try {
		return drawWeighted(this.states[prefix]);
	}
	catch(ex) {
		console.log("No state for prefix " + prefix);
		console.log(ex);
		return "$";
	}
}

MarkovChain.prototype.stats = function() {
	return {
		'states': Object.keys(this.states).length,
		'firstLevel': this.states['^'].length,
		'straights': count_dict(this.states, function(k,v) { return v.length == 1; }),
		'shorts': count_dict(this.states, function(k,v) { return k[0] == '^' && v.length == 1 && v[0].value == '$'}),
		'avgJunctions': sum_dict(this.states, function(k,v) { return v.length; }) / Object.keys(this.states).length,
	}
}

function count_dict(object, predicate) {
	var result = 0;
	for (key in object) {
		if (object.hasOwnProperty(key) && predicate(key, object[key])) {
			result += 1;
		}
	}
	return result;
}

function sum_dict(object, mapping) {
	var result = 0;
	for (key in object) {
		if (object.hasOwnProperty(key)) {
			result += mapping(key, object[key]);
		}
	}
	return result;
}

function test_addShortSample() {
	var mc = new MarkovChain(['Bo'], 4);
	console.assert(mc.states['^'][0].value == 'Bo');
	console.assert(mc.states['^Bo'][0].value == '$');
}
function test_addPrefixSizedSample() {
	var mc = new MarkovChain(['Bo'], 2);
	console.assert(mc.states['^'][0].value == 'Bo');
	console.assert(mc.states['Bo'].length == 1);
	console.assert(mc.states['Bo'][0].value == '$');
}
function test_addLongSample() {
	var mc = new MarkovChain(['Bla'], 2);
	console.assert(mc.states['^'][0].value == 'Bl');
	console.assert(mc.states['Bl'][0].value == 'a');
	console.assert(mc.states['la'][0].value == '$');
}
function test_all() {
	test_addShortSample();
	test_addPrefixSizedSample();
	test_addLongSample();
}

console.log("Loading male names...")
maleChain = new MarkovChain(maleNames, 3);
console.log("Loading female names...")
femaleChain = new MarkovChain(femaleNames, 3);
console.log("Loading surnames...")
surnameChain = new MarkovChain(surnames, 3);

function generateMaleName() {
	return maleChain.generate() + " " + surnameChain.generate();
}

function generateFemaleName() {
	return femaleChain.generate() + " " + surnameChain.generate();
}
