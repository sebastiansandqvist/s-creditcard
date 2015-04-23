'use strict';

// ----- dependencies
// ---------------------------------------
var valid = require('s-valid');


// ----- exported function
// ---------------------------------------
module.exports = function card(input) {

	if (typeof input !== 'string') {
		throw(new TypeError('Card input must be a string'));
	}

	for (var type in valid._regexps.creditCard) {
		
		if (valid.card[type](input)) {
			return type;
		}

	}

	if (valid.creditCard(input)) {
		return 'other';
	}
	
	return 'none';

};