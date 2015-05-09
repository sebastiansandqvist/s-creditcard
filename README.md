# s-creditcard

[![NPM version](https://img.shields.io/npm/v/s-creditcard.svg)](https://www.npmjs.com/package/s-creditcard) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-creditcard.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-creditcard.svg)](https://travis-ci.org/sebastiansandqvist/s-creditcard) [![Test Coverage](https://codeclimate.com/github/sebastiansandqvist/s-creditcard/badges/coverage.svg)](https://codeclimate.com/github/sebastiansandqvist/s-creditcard) [![NPM license](https://img.shields.io/npm/l/s-creditcard.svg)](https://www.npmjs.com/package/s-creditcard)

## Installation
```bash
npm install --save s-creditcard
```

## Usage
Input a credit card number (as a string) and it returns the type of credit card.

```javascript
card('4242424242424242') // returns 'visa'
```

###### Supported card types
* Visa (`visa`)
* Mastercard (`mastercard`)
* Discover (`discover`)
* American Express (`amex`)
* Diners Club (`dinersClub`)
* JCB (`jcb`)
* Carte Blanche (`carteBlanche`)
* Unionpay (`unionpay`)
* Lasercard (`lasercard`)
* Solo (`solo`)
* Maestro (`maestro`)

All other valid credit cards return `other`. Invalid credit cards return `none`. 
Be sure to trim whitespace and remove non-numeric characters from the credit card number.

## License
Copyright (c) 2015, Sebastian Sandqvist <s.github@sparque.me>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.