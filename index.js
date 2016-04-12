'use strict';

// ----- dependencies
// ---------------------------------------
var valid = require('s-valid/card');


// ----- metadata for known creditcards
// ---------------------------------------
var cards = {
	visa: { digits: 16, startsWith: [4] },
	mastercard: { digits: 16, startsWith: [51, 52, 53, 54, 55] },
	amex: { digits: 15, startsWith: [34, 37] },
	discover: { digits: 16, startsWith: [6011] },
	jcb: { digits: 16, startsWith: [3, 2131, 1800] } // must come last since 3 is less specific than amex/diners
};

// helper function determines if a string's first numbers
// are the same as a known creditcard's first numbers
function hasFirstDigits(str, n) {
	n = n.toString();
	var length = Math.min(str.length, n.length);
	for (var i = 0; i < length; i++) {
		if (str[i] !== n[i]) { return false; }
	}
	return true;
}

// ----- exported function
// ---------------------------------------
module.exports = function creditcard(input) {

	if (typeof input !== 'string') {
		throw (new TypeError('Card input must be a string'));
	}

	// remove all whitespace and dashes from string
	input = input.replace(/[\s-]+/g, '');

	// if credit card is already of valid type, return early
	for (var type in valid) {
		if (valid.hasOwnProperty(type) && type !== 'generic' && valid[type](input)) {
			return type;
		}
	}

	// for each card type in cards object...
	// NOTE: hasOwnProperty check not required as long as cards object
	// does not have anything specifically defined on its prototype
	for (var currentCard in cards) {
		// for each of their starting numbers...
		for (var j = 0; j < cards[currentCard].startsWith.length; j++) {
			// if the input is less than the length, just check that it starts with the correct digits
			if (input.length < cards[currentCard].digits && hasFirstDigits(input, cards[currentCard].startsWith[j])) {
				return currentCard;
			}
		}
	}

	if (valid.generic(input)) {
		return 'other';
	}
	
	return 'none';

};