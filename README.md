# s-creditcard

[![NPM version](https://img.shields.io/npm/v/s-creditcard.svg)](https://www.npmjs.com/package/s-creditcard) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-creditcard.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-creditcard.svg)](https://travis-ci.org/sebastiansandqvist/s-creditcard) [![NPM license](https://img.shields.io/npm/l/s-creditcard.svg)](https://www.npmjs.com/package/s-creditcard)

## Installation
```bash
npm install --save s-creditcard
```

## Usage
Input a credit card number (as a string) and it returns the type of credit card.
Incomplete inputs will also return successfully for the following card types:
* visa
* amex
* mastercard
* discover
* jcb

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
