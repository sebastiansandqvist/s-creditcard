var valid = require('s-valid/card');

// metadata for known creditcards
var cards = {
  visa: { digits: 16, startsWith: [4] },
  mastercard: { digits: 16, startsWith: [51, 52, 53, 54, 55] },
  amex: { digits: 15, startsWith: [34, 37] },
  discover: { digits: 16, startsWith: [6011] },
  jcb: { digits: 16, startsWith: [3, 2131, 1800] } // must come last since 3 is less specific than amex/diners
};

// determines if a string's first numbers
// are the same as a known creditcard's first numbers
function hasFirstDigits(str, n) {
  n = n.toString();
  var shorterLength = str.length < n.length ? str.length : n.length;
  return str.slice(0, shorterLength) === n.slice(0, shorterLength);
}

module.exports = function creditcard(input) {
  // remove all whitespace and dashes from string
  input = input.replace(/[\s-]+/g, '');

  // if credit card is already of valid type, return early
  for (var type in valid) {
    if (Object.prototype.hasOwnProperty.call(valid, type) && type !== 'generic' && valid[type](input)) {
      return type;
    }
  }

  for (var currentCard in cards) {
    // for each card type's known starting numbers...
    for (var j = 0; j < cards[currentCard].startsWith.length; j++) {
      // if the input is less than the length, just check that it starts with the correct digits
      if (input.length < cards[currentCard].digits && hasFirstDigits(input, cards[currentCard].startsWith[j])) {
        return currentCard;
      }
    }
  }

  if (valid.generic(input)) return 'other';
  return 'none';
};
