function randomInt(minIncl, maxExcl) {
	return minIncl + Math.floor(Math.random() * (maxExcl - minIncl));
}

function randomFloat(min, max) {
	return min + Math.random() * (max - min);
}

function randomBool(chance) {
	return randomFloat(0,1) < chance;
}

function draw(list) {
	var x = randomInt(0, list.length);
	return list[x];
}

function WeightedValue(value, weight) {
	this.value = value;
	this.weight = weight;
}
function drawWeighted(weightedList) {
	var sum = weightedList.reduce(function(aggr,v) { return aggr + v.weight; }, 0);
	var r = randomFloat(0, sum);
	var v = 0;
	for (var i=0; i < weightedList.length; i++) {
		v += weightedList[i].weight;
		if (v >= r) {
			return weightedList[i].value;
		}
	}
	throw "this is a bug";
}

function fac(n) {
	var result = 1;
	for (var i=n; i>0; i--) {
		result *= i;
	}
	return result;
}

// Number of variations of k elements drawn from a set of n elements,
// when order is important.
// Same as n * (n-1) * (n-2) * ... * (n-k+1)
function fallingFactorial(n,k) {
	return fac(n) / fac(n-k);
}


function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function containsIgnoreCase(container, string) {
	for (var i=0; i < container.length; i++) {
		if (container[i].toLowerCase() === string.toLowerCase()) {
			return true;
		}
	}
	return false;
}

function digitGroups(number, delimiter) {
	var str = "" + number;
	var result = "";
	for (var i=str.length - 1; i >= 0; i--) {
		if (result.length > 1 && (result.length+1) % 4 == 0) {
			result = "." + result;
		}
		result = str[i] + result;
	}
	return result;
}

GERMAN_NUMBER_NAMES = ['',' Tausend',' Millionen',' Milliarden',' Billionen',' Billiarden',' Trillionen',' Trilliarden',' Quadrillionen', ' Quadrilliarden'];
US_NUMBER_NAMES = ['', 'k', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', 'e21', 'e24', 'e27', 'e30'];
SI_PREFIX_SYMBOLS = ['','k','M','G','T','P','E','Z','Y'];

function abbreviateNumber(number, numberNames) {
	if (number <= 1000) {
		return number;
	}

	var exponent = 0;
	while (number > 1000 && exponent < (numberNames.length - 1)) {
		number /= 1000;
		exponent += 1;
	}
	return number.toFixed(2) + numberNames[exponent];
}
