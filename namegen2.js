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
    console.log("" + Math.round(firstnameCombinations) + " first names");

	var lastnameCombinations = 0;
	for (var i=0; i < lastnamePrefixCounts.length; i++) {
		lastnameCombinations += combinationsForPrefixCount(
			lastnamePrefixes, lastnameSuffixes, lastnameAny, lastnamePrefixCounts[i].value);
	}
    console.log("" + Math.round(lastnameCombinations) + " last names");

	var result = firstnameCombinations * conjections.length * lastnameCombinations ;
	if (COMPOSITE_LASTNAME_CHANCE > 0) {
		result += firstnameCombinations * conjections.length * lastnameCombinations * (lastnameCombinations - 1);
	}
	return result;
}

function combinationsForPrefixCount(prefixes, suffixes, any, numPrefixes) {
	var p = prefixes.length;
	var s = suffixes.length;
	var a = any.length;
	var np = numPrefixes;

	return s * fallingFactorial(p+a, np)
		 + a * fallingFactorial(p+a-1, np);
}
