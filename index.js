'use strict';

// ----- dependencies
// ---------------------------------------
var card = require('s-valid/card');


// ----- exported function
// ---------------------------------------
module.exports = function creditcard(input) {

	if (typeof input !== 'string') {
		throw(new TypeError('Card input must be a string'));
	}

	for (var type in card) {
		if (card.hasOwnProperty(type) && type !== 'generic') {
			if (card[type](input)) {
				return type;
			}
		}
	}

	if (card.generic(input)) {
		return 'other';
	}
	
	return 'none';

};