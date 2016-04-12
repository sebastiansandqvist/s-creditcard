// ----- dependencies
// ---------------------------------------
var expect = require('chai').expect;
var card = require('../index.js');


// ----- tests
// ---------------------------------------
describe('Credit Card Type', function() {

	it('should be a function', function() {
		expect(card).to.be.a.function;
	});

	it('should throw with bad input type', function() {

		expect(function() {
			card();
		}).to.throw();

		expect(function() {
			card(12345);
		}).to.throw();

		expect(function() {
			card('');
		}).to.not.throw();

	});


	it('should work with all card types at official lengths', function() {

		expect(card('4222222222222')).to.equal('visa');
		expect(card('4111111111111111')).to.equal('visa');
		expect(card('4242424242424242')).to.equal('visa');

		expect(card('378282246310005')).to.equal('amex');
		expect(card('371449635398431')).to.equal('amex');
		expect(card('378734493671000')).to.equal('amex');

		expect(card('6011111111111117')).to.equal('discover');
		expect(card('6011000990139424')).to.equal('discover');

		expect(card('5555555555554444')).to.equal('mastercard');
		expect(card('5105105105105100')).to.equal('mastercard');

		expect(card('3530111333300000')).to.equal('jcb');
		expect(card('3566002020360505')).to.equal('jcb');

		expect(card('6331101999990016')).to.equal('solo');

		expect(card('38000000000006')).to.equal('carteBlanche');

		expect(card('30569309025904')).to.equal('dinersClub');
		expect(card('38520000023237')).to.equal('dinersClub');

		expect(card('6304850000000040')).to.equal('lasercard');
		expect(card('6304850000000602')).to.equal('lasercard');

		expect(card('6240008631401148')).to.equal('unionpay');

		expect(card('6759649826438453')).to.equal('maestro');
		expect(card('6759000000000000')).to.equal('maestro');
		expect(card('6799990100000000019')).to.equal('maestro');

	});

	it('should work with spaces', function() {
		expect(card('4222 2222 22222')).to.equal('visa');
		expect(card('4111 1111 1111 1111')).to.equal('visa');
		expect(card('4242 4242 4242 4242')).to.equal('visa');
	});

	it('should work with hyphens', function() {
		expect(card('4222-2222-22222')).to.equal('visa');
		expect(card('4111-1111-1111-1111')).to.equal('visa');
		expect(card('4242-4242-4242-4242')).to.equal('visa');
	});

	it('should work with all known card types at shorter lengths', function() {

		expect(card('4222')).to.equal('visa');
		expect(card('41')).to.equal('visa');
		expect(card('42424242424242')).to.equal('visa');

		expect(card('378282')).to.equal('amex');
		expect(card('37')).to.equal('amex');
		expect(card('378')).to.equal('amex');

		expect(card('601')).to.equal('discover');
		expect(card('6011-')).to.equal('discover');
		expect(card('601100000000000')).to.equal('discover');
		expect(card('601111111111111')).to.equal('discover');
		expect(card('601100099013942')).to.equal('discover');

		expect(card('510')).to.equal('mastercard');
		expect(card('5555-')).to.equal('mastercard');

		expect(card('3530')).to.equal('jcb');
		expect(card('35660')).to.equal('jcb');

	});

	it('should return none for exceeding length of known cards', function() {
		expect(card('42424242424242424')).to.equal('none');
	});

	it('should return other for other card types', function() {
		expect(card('5610591081018250')).to.equal('other'); // australian bankcard
	});

	it('should return none for not a card', function() {
		expect(card('1234567890')).to.equal('none');
	});

});